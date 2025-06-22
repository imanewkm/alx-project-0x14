import React from 'react';

interface BaseProps {
    children: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <main>
                {children}
            </main>
        </div>
    );
};

export default Base;
