"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "white" | "outline-white" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  href: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(215,38,56,0.3)] active:translate-y-0",
  ghost:
    "bg-transparent text-white border border-white/35 hover:border-white hover:bg-white/5",
  white:
    "bg-white text-brand-red hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] active:translate-y-0",
  "outline-white":
    "bg-transparent text-white border-2 border-white/60 hover:border-white hover:bg-white/10",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe5d]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-8 py-3.5 text-base",
  lg: "px-9 py-4 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-display font-bold uppercase tracking-wide rounded-sm transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
  children,
  href,
  ...props
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
