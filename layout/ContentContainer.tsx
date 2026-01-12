import React from 'react';

interface ContentContainerProps {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-(--spacing-base) pt-(--spacing-lg) md:pl-(--spacing-base) md:justify-start">
      <div className="z-10 w-full md:w-3/4 lg:w-1/2 rounded-(--border-radius) bg-black/85 p-10 flex flex-col gap-(--spacing-sm) max-h-[calc(100vh-calc(var(--spacing-base)*6))] overflow-y-auto text-white">
        {children}
      </div>
    </div>
  );
};
