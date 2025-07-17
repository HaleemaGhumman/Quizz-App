import { jsx as _jsx } from "react/jsx-runtime";
const HighlightedText = ({ themeText, children }) => {
    return (_jsx("span", { className: themeText ? 'text-theme-text' : 'text-theme-color', children: children }));
};
export default HighlightedText;
