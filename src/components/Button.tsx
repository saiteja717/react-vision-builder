
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'default',
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'btn-gradient text-white',
    secondary: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50',
    outline: 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50',
  };
  
  const sizes = {
    default: 'py-2.5 px-6 text-base',
    sm: 'py-2 px-4 text-sm',
    lg: 'py-3 px-8 text-lg',
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
