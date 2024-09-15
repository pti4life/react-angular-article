import React, { forwardRef } from 'react';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 24, color = 'black', ...props }, ref) => {
    const spinnerStyle: React.CSSProperties = {
      width: size,
      height: size,
      border: `4px solid ${color}`,
      borderTop: `4px solid transparent`,
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    };

    return <div ref={ref} style={spinnerStyle} {...props}></div>;
  }
);

export default Spinner;
