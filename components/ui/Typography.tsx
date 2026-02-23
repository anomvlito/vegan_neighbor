import { ReactNode, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1 className={cn('text-5xl font-display font-bold tracking-widest uppercase', className)} {...props}>
      {children}
    </h1>
  )
}

export function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2 className={cn('text-4xl font-display font-bold tracking-wider uppercase', className)} {...props}>
      {children}
    </h2>
  )
}

export function H3({ children, className, ...props }: TypographyProps) {
  return (
    <h3 className={cn('text-3xl font-display font-bold tracking-wide uppercase', className)} {...props}>
      {children}
    </h3>
  )
}

export function H4({ children, className, ...props }: TypographyProps) {
  return (
    <h4 className={cn('text-2xl font-display font-bold tracking-wide', className)} {...props}>
      {children}
    </h4>
  )
}

export function Subtitle({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn('text-lg font-mono tracking-wide text-vn-black/80', className)} {...props}>
      {children}
    </p>
  )
}

export function Body({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn('text-base font-sans leading-relaxed', className)} {...props}>
      {children}
    </p>
  )
}

export function Tagline({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn('font-mono text-sm tracking-widest uppercase font-semibold', className)} {...props}>
      {children}
    </p>
  )
}
