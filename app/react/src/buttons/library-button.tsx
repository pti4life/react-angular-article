import { forwardRef, ButtonHTMLAttributes } from 'react';

/** Quite good base button for our library */
const LibraryButton = forwardRef<HTMLButtonElement, LibraryButtonProps>(
  ({ children, variant, className, ...props }, ref) => {
    const variantClass = variant === 'outlined' ? 'btn--outlined' : '';
    return (
      <button
        className={`${variantClass} ${className || ''}`}
        ref={ref}
        {...props}
      >
        {children}
        <div className="lets_say_this_class_gives_us_ripple_effect"></div>
      </button>
    );
  }
);

export default LibraryButton;

export type LibraryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outlined';
};
