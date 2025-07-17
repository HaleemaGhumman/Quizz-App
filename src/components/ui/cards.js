import { jsx as _jsx } from "react/jsx-runtime";
const CenterCardContainer = ({ children }) => {
    return (_jsx("div", { className: "bg-card-bg flex min-h-[620px] min-w-full flex-col items-center justify-center rounded-sm px-3 pt-12 pb-16 md:min-w-[773px]", children: children }));
};
export default CenterCardContainer;
