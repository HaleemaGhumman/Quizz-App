import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
const Flex = ({ center, spaceBetween, flxEnd, gap, children }) => {
    return (_jsx("div", { className: cn('flex', { 'items-center justify-center': center }, { 'items-center justify-between': spaceBetween }, { 'items-center justify-end': flxEnd }), style: { gap }, children: children }));
};
export default Flex;
