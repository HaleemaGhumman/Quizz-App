import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
const PageCenter = ({ light, justifyCenter, children }) => {
    return (_jsx("div", { className: cn(`flex min-h-dvh flex-col items-center p-5 pt-12`, {
            'justify-center': justifyCenter,
        }, light ? 'background' : 'theme-gradient'), children: children }));
};
export default PageCenter;
