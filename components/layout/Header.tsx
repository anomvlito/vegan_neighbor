'use client'

import Link from 'next/link'
import { Logo, LogoCompact } from '@/components/ui/Logo'
import { useCart } from '@/lib/hooks/useCart'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const navLinks = [
    { href: '/productos', label: 'Productos' },
    { href: '/colecciones', label: 'Colecciones' },
    { href: '/buscar', label: 'Buscar' },
  ]

  return (
    <header className="bg-vn-white border-b-2 border-vn-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <LogoCompact />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm font-semibold tracking-wider hover:text-vn-black/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart Icon */}
          <Link
            href="/carrito"
            className="relative hover:opacity-80 transition-opacity"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-vn-black text-vn-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4 border-t-2 border-vn-black pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm font-semibold tracking-wider hover:text-vn-black/70 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
