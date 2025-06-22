import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    disabled = false,
    className = '',
}) => {
    const baseClasses = 'px-4 py-2 rounded font-medium transition-colors duration-200';
    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-300',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white disabled:border-blue-300 disabled:text-blue-300',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
