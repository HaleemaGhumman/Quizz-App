import { jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
const Button = ({ text, onClick, icon, iconPosition, outline, bold, big, disabled, }) => {
    return (_jsxs("button", { onClick: onClick, disabled: disabled, className: cn('active:shadow-active-button disabled:bg-disabled-button disabled:text-dark-grey flex min-h-[40px] cursor-pointer items-center justify-center gap-4 rounded-lg text-[16px] active:scale-[0.98] active:transition-all active:duration-200 disabled:transform-[unset] disabled:cursor-not-allowed disabled:shadow-none sm:text-[18px] md:min-h-[50px] md:w-[195px] md:text-[20px] lg:text-[22px] xl:text-[24px]', outline
            ? 'text-outline-button-text bg-card-bg border-theme-color border'
            : 'text-button-text not-disabled:button-background border-none', bold ? 'font-bold' : 'font-normal', big ? 'w-[180px]' : 'w-[150px]'), children: [icon && iconPosition === 'left' && icon, text, icon && iconPosition === 'right' && icon] }));
};
export default Button;
