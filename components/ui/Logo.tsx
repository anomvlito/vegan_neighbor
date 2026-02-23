import Image from 'next/image'
import { cn } from '@/lib/utils/cn'

type LogoVariant = 'DOSLINEAS' | 'UNALINEA' | 'BAJADA' | 'AVATAR'
type LogoVersion = 'POSITIVO' | 'NEGATIVO' | 'TRANSPARENTE'

interface LogoProps {
  variant?: LogoVariant
  version?: LogoVersion
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  asLink?: boolean
  href?: string
}

const sizeMap = {
  xs: { width: 60, height: 60 },
  sm: { width: 100, height: 100 },
  md: { width: 150, height: 150 },
  lg: { width: 200, height: 200 },
  xl: { width: 300, height: 300 },
}

const getLogoPath = (variant: LogoVariant, version: LogoVersion) => {
  return `/assets/VN_logopack/PNG/${version}-${variant}.png`
}

export function Logo({
  variant = 'DOSLINEAS',
  version = 'TRANSPARENTE',
  size = 'md',
  className,
  asLink = false,
  href = '/',
}: LogoProps) {
  const { width, height } = sizeMap[size]
  const path = getLogoPath(variant, version)

  const logoContent = (
    <Image
      src={path}
      alt="Vegan Neighbor - rico, casero, vegan"
      width={width}
      height={height}
      priority
      className={cn('object-contain', className)}
    />
  )

  if (asLink) {
    return <a href={href}>{logoContent}</a>
  }

  return logoContent
}

// Inline SVG version for header
export function LogoCompact() {
  return (
    <Image
      src="/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png"
      alt="VN"
      width={40}
      height={40}
      className="object-contain"
    />
  )
}
