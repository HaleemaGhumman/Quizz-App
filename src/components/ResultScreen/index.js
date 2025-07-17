import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import { AppLogo, Refresh } from '../../config/icons';
import { useQuiz } from '../../context/QuizContext';
import { refreshPage } from '../../utils/helpers';
import Button from '../ui/Button';
import CodeSnippet from '../ui/CodeSnippet';
import Flex from '../ui/Flex';
import QuizImage from '../ui/Quizpicture';
import ResultOverview from './ResultOverview';
import RightAnswer from './RightAnswer';
const ResultScreen = () => {
    const { result } = useQuiz();
    const onClickRetry = () => {
        refreshPage();
    };
    return (_jsxs("div", { className: "mx-auto my-8 w-[90%] max-w-[900px] p-10 md:my-14 md:w-auto md:p-0", children: [_jsxs("div", { className: "flex items-center justify-center gap-3 mb-8 md:mb-12", children: [_jsx(AppLogo, { className: "w-[40px]" }), _jsx("h1", { className: "text-base md:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent", children: "IQode by Haleema" })] }), _jsxs("div", { className: "bg-card-bg mx-auto mt-0 mb-10 rounded-sm p-4 md:px-[90px] md:pt-10 md:pb-[90px]", children: [_jsx(ResultOverview, { result: result }), result.map(({ question, choices, code, image, correctAnswers, selectedAnswer, score, isMatch, }, index) => {
                        return (_jsxs("div", { className: "mt-10 flex flex-col justify-between md:flex-row", children: [_jsxs("div", { className: "w-[90%]", children: [_jsxs(Flex, { gap: "4px", children: [_jsx("h6", { className: "text-primary-text text-[16px] leading-[1.3] font-medium sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]", children: `${index + 1}. ` }), _jsx("span", { className: "text-primary-text mb-[10px] text-[16px] leading-[1.3] font-medium sm:text-[18px] md:mb-5 md:text-[20px] lg:text-[22px] xl:text-[24px]", children: question })] }), _jsxs("div", { children: [code && _jsx(CodeSnippet, { code: code, language: "javascript" }), image && _jsx(QuizImage, { image: image }), _jsx("ul", { children: choices.map((ans, index) => {
                                                        const label = String.fromCharCode(65 + index);
                                                        const correct = selectedAnswer.includes(ans) && correctAnswers.includes(ans);
                                                        const wrong = selectedAnswer.includes(ans) && !correctAnswers.includes(ans);
                                                        return (_jsxs("li", { className: cn('border-border bg-answer-bg text-secondary-text mt-[13px] w-full rounded-2xl border p-4 text-[16px] font-normal sm:mt-[14px] sm:text-[17px] md:mt-[15px] md:w-[90%] md:text-[18px] md:font-semibold lg:mt-[16px]', { 'border-success bg-success-light border': correct }, { 'border-danger bg-danger-light border': wrong }), children: [_jsxs("span", { className: "mr-[14px]", children: [label, "."] }), ans] }, ans));
                                                    }) }), !isMatch && (_jsx(RightAnswer, { correctAnswers: correctAnswers, choices: choices }))] })] }), _jsx("span", { className: cn('mt-[10px] mr-[10px] flex justify-end text-base font-medium md:mt-1 md:mr-0 md:inline', isMatch ? 'text-success' : 'text-danger'), children: `Score ${isMatch ? score : 0}` })] }, question));
                    })] }), _jsx(Flex, { flxEnd: true, children: _jsx(Button, { text: "RETRY", onClick: onClickRetry, icon: _jsx(Refresh, {}), iconPosition: "left", bold: true }) })] }));
};
export default ResultScreen;
