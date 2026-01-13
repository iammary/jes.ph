export const ContentContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className="flex min-h-screen w-full items-center justify-center p-(--spacing-base) pt-(--spacing-lg) md:pl-(--spacing-base) md:justify-start">
    <div className="z-10 w-full lg:w-3/4 xl:w-1/2 rounded-(--border-radius) bg-black/85 p-10 flex flex-col gap-(--spacing-sm) max-h-[calc(100vh-calc(var(--spacing-base)*6))] overflow-y-auto text-white">
      {children}
    </div>
  </div>
);
