'use client';

import Link from 'next/link';
import {
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  forwardRef,
} from 'react';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-body font-medium tracking-wide transition-all duration-300 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed';

const variantStyles = {
  primary:
    'bg-[#243C32] text-[#F8F5EF] hover:bg-[#1a2d25] border border-transparent',
  secondary:
    'bg-[#E8DCCB] text-[#262622] hover:bg-[#ddd0ba] border border-transparent',
  outline:
    'bg-transparent text-[#243C32] border border-[#243C32] hover:bg-[#243C32] hover:text-[#F8F5EF]',
  ghost:
    'bg-transparent text-[#262622] hover:bg-[#E8DCCB] border border-transparent',
  gold: 'bg-[#B69A65] text-white hover:bg-[#a08855] border border-transparent',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className = '',
      children,
      href,
      ...props
    },
    ref
  ) => {
    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
