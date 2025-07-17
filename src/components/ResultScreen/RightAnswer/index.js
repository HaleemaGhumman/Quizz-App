import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import HighlightedText from '../../ui/HighlightedText';
const RightAnswer = ({ correctAnswers, choices }) => {
    return (_jsxs("p", { className: "text-darker-grey mt-4 text-lg leading-[1.2] font-normal", children: [`Right ${correctAnswers.length < 2 ? 'Answer' : 'Answers'}: `, correctAnswers.map((item, index) => {
                const label = String.fromCharCode(65 + choices.indexOf(item));
                return (_jsx(HighlightedText, { themeText: true, children: `${label} (${item})${index !== correctAnswers.length - 1 ? ', ' : ''}` }, index));
            })] }));
};
export default RightAnswer;
