import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rightLabel?: string;  
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, rightLabel, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pr-10",  // Added padding to the right
            className
          )}
          ref={ref}
          {...props}
        />
        {rightLabel && (
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            {rightLabel}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
