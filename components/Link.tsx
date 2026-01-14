import Link, { LinkProps } from 'next/link';

interface CustomLinkProps extends LinkProps {
  asButton?: boolean;
  mode?: 'light' | 'dark';
  className?: string;
  children: React.ReactNode;
  target?: string;
}

export const CustomLink = ({ asButton, mode = 'light', className = '', children, ...props }: CustomLinkProps) => {
  if (asButton) {
    const baseStyles = 'px-6 py-2 rounded-full transition-colors';
    const modeStyles = mode === 'light' ? 'bg-gray-200 text-black hover:bg-white' : 'bg-gray-800 text-white hover:bg-black';

    return (
      <Link className={`${baseStyles} ${modeStyles} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  );
};
