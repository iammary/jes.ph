export const ContentContainer: React.FC<{
  children: React.ReactNode;
  centered?: boolean;
  mode?: 'dark' | 'light';
}> = ({ children, centered = false, mode = 'dark' }) => (
  <div
    className={`flex min-h-screen w-full items-center justify-center p-(--spacing-base) pt-(--spacing-md) md:pt-(--spacing-lg) md:pl-(--spacing-base) ${
      centered ? 'md:justify-center' : 'md:justify-start'
    }`}
    data-theme={mode}>
    <div
      className={`z-10 w-full lg:w-3/4 xl:w-1/2 rounded-(--border-radius) p-8 md:p-10 flex flex-col gap-(--spacing-sm) max-h-[calc(100vh-calc(var(--spacing-base)*6))] overflow-y-auto ${
        mode === 'light' ? 'bg-white/95 text-black' : 'bg-black/85 text-white'
      }`}>
      {children}
    </div>
  </div>
);
