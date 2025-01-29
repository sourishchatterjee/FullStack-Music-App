// import React, { forwardRef } from "react";
// import { twMerge } from "tailwind-merge";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, children, disabled, type = "button", ...props }, ref) => {
//     return (
//       <button
//         ref={ref}
//         type={type}
//         disabled={disabled}
//         className={twMerge(
//           `
//           w-full
//           rounded-full
//           bg-green-400
//           border
//           border-transparent
//           px-3
//           py-3
//           text-black
//           font-bold
//           hover:opacity-75
//           transition
//           disabled:cursor-not-allowed
//           disabled:opacity-50
//         `,
//           className
//         )}
//         {...props}
//       >
//         {children}
//       </button>
//     );
//   }
// );

// Button.displayName = "Button";

// export default Button;



import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={twMerge(
          `
          w-full
          rounded-full
          bg-green-400
          border
          border-transparent
          px-3
          py-3
          text-black
          font-bold
          hover:opacity-75
          transition
          disabled:cursor-not-allowed
          disabled:opacity-50
        `,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
