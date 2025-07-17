import { jsxs as _jsxs } from "react/jsx-runtime";
import { useQuiz } from '../../../context/QuizContext';
import { convertSeconds } from '../../../utils/helpers';
import HighlightedText from '../../ui/HighlightedText';
const ResultOverview = ({ result }) => {
    const { quizDetails, endTime } = useQuiz();
    const totalQuestionAttempted = result.length;
    const obtainedScore = result
        .filter((item) => item.isMatch && typeof item.score === 'number')
        .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0);
    // Passed if 60 or more than 60% marks
    const calculateStatus = (obtainedScore / quizDetails.totalScore) * 100 >= 60 ? 'Passed' : 'Failed';
    return (_jsxs("div", { className: "mb-7 text-center md:mb-18", children: [_jsxs("p", { className: "mt-4 text-lg font-medium", children: ["You attempted questions:", ' ', _jsxs(HighlightedText, { children: [" ", totalQuestionAttempted, " "] }), "/", ' ', quizDetails.totalQuestions] }), _jsxs("p", { className: "mt-4 text-lg font-medium", children: ["Score secured:", _jsxs(HighlightedText, { children: [" ", obtainedScore, " "] }), "/", ' ', quizDetails.totalScore] }), _jsxs("p", { className: "mt-4 text-lg font-medium", children: ["Time Spent:", _jsxs(HighlightedText, { children: [" ", convertSeconds(endTime), " "] })] }), _jsxs("p", { className: "mt-4 text-lg font-medium", children: ["Status:", _jsxs(HighlightedText, { children: [" ", calculateStatus] })] })] }));
};
export default ResultOverview;
