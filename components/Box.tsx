import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={twMerge(
        `
        bg-neutral-900
        rounded-lg
        h-full // Allow full height if parent has constrained height
        w-full
        overflow-y-auto // Add vertical scrolling by default
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
