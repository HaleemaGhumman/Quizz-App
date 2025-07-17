import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Flex from '../../../ui/Flex';
import { TimerIcon } from '../../../../config/icons';
const Counter = ({ time }) => {
    return (_jsxs(Flex, { center: true, children: [_jsx(TimerIcon, {}), _jsx("span", { className: "text-theme-color ml-1 min-w-[55px] text-[16px] font-medium sm:text-[18px] md:ml-2 md:min-w-[60px] md:text-[20px] lg:text-[22px] xl:text-[24px]", children: time })] }));
};
export default Counter;
