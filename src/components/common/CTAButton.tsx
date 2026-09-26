import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, Sparkles } from "lucide-react";

export type CTAButtonVariant = "primary" | "secondary" | "whatsapp" | "outline" | "call";
export type CTAButtonSize = "sm" | "md" | "lg";

export interface CTAButtonProps {
  children: React.ReactNode;
  variant?: CTAButtonVariant;
  size?: CTAButtonSize;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: "arrow" | "phone" | "whatsapp" | "sparkles" | "none";
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export function CTAButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  isLoading = false,
  fullWidth = false,
  icon = "arrow",
  className = "",
  target,
  rel,
  type = "button",
  ariaLabel,
}: CTAButtonProps) {
  // Variant base styles
  const variantStyles = {
    primary:
      "bg-brand-600 hover:bg-brand-500 text-white shadow-md shadow-brand-900/20 border border-brand-500/20 focus:ring-brand-500",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 focus:ring-slate-400",
    whatsapp:
      "bg-emerald-700 hover:bg-emerald-600 text-white border border-emerald-600/30 focus:ring-emerald-500 shadow-sm",
    call:
      "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 focus:ring-slate-400",
    outline:
      "bg-transparent hover:bg-white/10 text-white border border-white/20 focus:ring-white",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-xs sm:text-sm rounded-xl gap-2 font-bold",
    lg: "px-7 py-3.5 text-sm sm:text-base rounded-xl gap-2.5 font-bold",
  };

  const baseClasses = `inline-flex items-center justify-center font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-60 disabled:pointer-events-none ${
    fullWidth ? "w-full" : "w-auto"
  } ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Icon selector
  const renderIcon = () => {
    if (isLoading) {
      return (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
      );
    }
    switch (icon) {
      case "arrow":
        return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />;
      case "phone":
        return <Phone className="w-3.5 h-3.5 shrink-0" />;
      case "whatsapp":
        return <MessageSquare className="w-4 h-4 shrink-0" />;
      case "sparkles":
        return <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />;
      default:
        return null;
    }
  };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || (href.startsWith("http") ? "_blank" : undefined)}
          rel={rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)}
          className={`group ${baseClasses}`}
          aria-label={ariaLabel}
        >
          <span>{children}</span>
          {renderIcon()}
        </a>
      );
    }

    return (
      <Link href={href} className={`group ${baseClasses}`} aria-label={ariaLabel} onClick={onClick}>
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`group ${baseClasses}`}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}
