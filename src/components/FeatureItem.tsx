
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
  delay?: number;
}

const FeatureItem = ({ icon, text, className, delay = 0 }: FeatureItemProps) => {
  return (
    <div 
      className={cn(
        "flex items-center space-x-2 animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
        {icon}
      </div>
      <span className="text-gray-600">{text}</span>
    </div>
  );
};

export default FeatureItem;
