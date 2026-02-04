'use client';

import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-semibold leading-[1.2] transition hover:-translate-y-0.5';

const variants: Record<ButtonVariant, string> = {
  primary:
    'cursor-pointer bg-accent text-white shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20',
  secondary: 'border border-border bg-bg text-secondary shadow-sm',
};

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />;
}
