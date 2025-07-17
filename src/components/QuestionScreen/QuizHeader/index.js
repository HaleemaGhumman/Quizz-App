import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Flex from '../../ui/Flex';
import { addLeadingZero, formatTime } from '../../../utils/helpers';
import Counter from './Counter';
const QuizHeader = ({ activeQuestion, totalQuestions, timer }) => {
    return (_jsxs(Flex, { spaceBetween: true, gap: "6px", children: [_jsxs("div", { children: [_jsx("span", { className: "text-theme-color text-[40px] font-medium sm:text-[45px] md:text-[50px] lg:text-[55px] xl:text-[60px]", children: addLeadingZero(activeQuestion + 1) }), _jsxs("span", { className: "text-darker-grey text-[20px] font-medium sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px]", children: ["/", addLeadingZero(totalQuestions)] })] }), _jsx(Flex, { children: _jsx(Counter, { time: `${formatTime(timer)}` }) })] }));
};
export default QuizHeader;
