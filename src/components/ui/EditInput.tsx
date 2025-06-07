import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface CommonProps {
    inputType?: "input" | "textArea";
    className?: string;
}

type InputProps =
    | (CommonProps & InputHTMLAttributes<HTMLInputElement> & { inputType: "input" })
    | (CommonProps & TextareaHTMLAttributes<HTMLTextAreaElement> & { inputType: "textArea" });

const EditInput = ({ className = "", inputType = "input", ...props }: InputProps) => {
    return (
        <div>
            {inputType === "input" ? (
                <input
                    {...(props as InputHTMLAttributes<HTMLInputElement>)}
                    className={`border-b border-gray-light px-3 text-sm py-2.5 outline-none w-full ${className}`}
                />
            ) : (
                <textarea
                    {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    className={`border-b border-gray-light px-3 text-sm py-2.5 outline-none w-full resize-none ${className}`}
                />
            )}
        </div>
    );
};

export default EditInput;
