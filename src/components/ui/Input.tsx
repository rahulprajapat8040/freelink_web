import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    className?: string;
}
const Input = ({ label, error, className, ...props }: InputProps) => {
    return (
        <div>
            {
                label && <label className="pb-2 inline-block">{label}</label>
            }
            <input
                {...props}
                className={`border px-3 text-sm py-2.5 rounded-lg outline-none w-full ${className}`}
            />
            {
                error && <p className="text-red-500 text-sm mt-1 text-nowrap">{error}</p>
            }
        </div>
    )
}

export default Input;