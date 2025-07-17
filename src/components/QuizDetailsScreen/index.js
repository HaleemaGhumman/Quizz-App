import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppLogo, StartIcon } from '../../config/icons';
import { useQuiz } from '../../context/QuizContext';
import { ScreenTypes } from '../../types';
import { convertSeconds } from '../../utils/helpers';
import Button from '../ui/Button';
import CenterCardContainer from '../ui/cards';
import HighlightedText from '../ui/HighlightedText';
import PageCenter from '../ui/PageCenter';
const QuizDetailsScreen = () => {
    const { setCurrentScreen, quizDetails } = useQuiz();
    const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails;
    const goToQuestionScreen = () => {
        setCurrentScreen(ScreenTypes.QuestionScreen);
    };
    return (_jsx(PageCenter, { light: true, justifyCenter: true, children: _jsxs(CenterCardContainer, { children: [_jsxs("div", { className: "flex items-center justify-center gap-3 mb-8 md:mb-12", children: [_jsx(AppLogo, { className: "w-[40px]" }), " ", _jsx("h1", { className: "text-base md:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent", children: "IQode by Haleema" })] }), _jsx("h2", { className: "text-theme-color text-3xl font-bold", children: "IQode by Haleema" }), _jsxs("div", { className: "mt-4 mb-10 max-w-[500px] text-center text-xl font-medium", children: [_jsxs("p", { className: "text-5 mt-4 leading-[1.3] font-medium", children: ["Selected Quiz Topic: ", _jsx(HighlightedText, { children: selectedQuizTopic })] }), _jsxs("p", { className: "text-5 mt-4 leading-[1.3] font-medium", children: ["Total questions to attempt:", ' ', _jsx(HighlightedText, { children: totalQuestions })] }), _jsxs("p", { className: "text-5 mt-4 leading-[1.3] font-medium", children: ["Score in total: ", _jsx(HighlightedText, { children: totalScore })] }), _jsxs("p", { className: "text-5 mt-4 leading-[1.3] font-medium", children: ["Total time: ", _jsx(HighlightedText, { children: convertSeconds(totalTime) })] })] }), _jsx(Button, { text: "Start", icon: _jsx(StartIcon, {}), iconPosition: "left", onClick: goToQuestionScreen, bold: true })] }) }));
};
export default QuizDetailsScreen;
