import { ReactNode, TextareaHTMLAttributes, forwardRef } from "react";

import "./style.css";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  helperText?: ReactNode;
}

export const TextareaApp = forwardRef<HTMLTextAreaElement, IProps>(({ error, helperText, ...props }, ref) => {
  return (
    <div>
      <textarea
        rows={5}
        // maxRows={5}
        className={`textarea__container ${error ? "error" : ""}`}
        ref={ref}
        {...props}
      />
      {helperText && <p className={`textarea__helper-text ${error ? "error" : ""}`}>{helperText}</p>}
    </div>
  );
});
