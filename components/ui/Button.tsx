'use client'

import { ButtonHTMLAttributes, forwardRef, ReactNode, cloneElement } from 'react'
import { cn } from '@/lib/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseStyles = 'font-display font-bold tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-vn-black text-vn-white hover:bg-vn-black/90 active:bg-vn-black/80',
      secondary: 'bg-vn-white text-vn-black border-2 border-vn-black hover:bg-vn-natural active:bg-vn-natural/80',
      outline: 'border-2 border-vn-black text-vn-black hover:bg-vn-black hover:text-vn-white transition-colors',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className)

    if (asChild && children) {
      return cloneElement(children as React.ReactElement, {
        className: combinedClassName,
        ...props,
      } as any)
    }

    return (
      <button
        className={combinedClassName}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
