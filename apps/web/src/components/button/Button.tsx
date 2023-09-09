import React, { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const button = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus:ring",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border border-white text-primary-foreground hover:bg-accent hover:text-accent-foreground",
        primary:
          "bg-primaryGreen text-primary-foreground hover:bg-primaryGreen/90",
        secondary: "bg-blue text-primary-foreground hover:bg-primary/90",
        destructive: "bg-blue text-primary-foreground hover:bg-primary/90",
      },
      size: {
        default: "h-10 py-2 px-4",
        md: "h-10 py-2 px-4",
        sm: "h-10 py-2 px-4",
        lg: "h-10 py-2 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={button({ className, variant })}
        ref={ref}
        {...props}
      ></button>
    );
  }
);

Button.displayName = "Button";
