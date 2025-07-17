import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CodeSnippet from '../../ui/CodeSnippet';
import QuizImage from '../../ui/Quizpicture';
import Answer from '../Answer';
const Question = ({ question, code, image, type, choices, selectedAnswer, handleAnswerSelection, }) => {
    return (_jsxs("div", { className: "mt-8 mb-10 max-w-full md:max-w-[88%]", children: [_jsx("h2", { className: "text-primary-text mb-6 text-[18px] leading-[1.3] font-medium sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px]", children: question }), code && _jsx(CodeSnippet, { code: code, language: "javascript" }), image && _jsx(QuizImage, { image: image }), _jsx("div", { className: "max-w-full md:max-w-[78%]", children: choices.map((choice, index) => (_jsx(Answer, { choice: choice, index: index, onChange: (e) => handleAnswerSelection(e, index), type: type, selectedAnswer: selectedAnswer }, index))) })] }));
};
export default Question;
