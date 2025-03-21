import { forwardRef } from "react";
import { cn } from "./button";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border border-white/10 bg-white px-4 py-2 text-black shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black/40 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
