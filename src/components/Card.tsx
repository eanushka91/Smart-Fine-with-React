import React from 'react';
interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  className = ''
}) => {
  return <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
      {title && <h2 className="text-lg font-medium text-gray-900 mb-4">{title}</h2>}
      {children}
    </div>;
};
export default Card;