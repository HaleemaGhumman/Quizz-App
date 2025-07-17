import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
const Answer = ({ onChange, index, choice, type, selectedAnswer }) => {
    // Convert index to alphabet character to show ABCD before question
    const label = String.fromCharCode(65 + index);
    return (_jsx("div", { className: cn('text-secondary-text mt-[13px] cursor-pointer rounded-2xl border text-[16px] font-medium sm:mt-[14px] md:mt-[15px] md:text-[17px] md:font-normal lg:mt-[16px] lg:text-[18px]', selectedAnswer.includes(choice)
            ? 'border-theme-color bg-selected-answer transition-all duration-200 ease-in'
            : 'border-border bg-answer-bg'), children: _jsxs("label", { className: "flex cursor-pointer p-[14px] md:p-[18px]", children: [_jsxs("span", { children: [label, "."] }), _jsx("input", { name: choice, 
                    // radio is for checked one option and checkbox is for checked multiple options
                    type: type === 'MAQs' ? 'checkbox' : 'radio', checked: selectedAnswer.includes(choice), onChange: onChange, className: "invisible m-0" }), choice] }) }, index));
};
export default Answer;
