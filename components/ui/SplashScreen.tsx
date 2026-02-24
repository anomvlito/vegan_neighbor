'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const hasVisited = sessionStorage.getItem('vn-splash-seen')
    if (hasVisited) {
      setShowSplash(false)
    }
  }, [])

  const handleEnter = () => {
    setIsExiting(true)
    sessionStorage.setItem('vn-splash-seen', 'true')
    setTimeout(() => {
      setShowSplash(false)
    }, 800)
  }

  return (
    <>
      {/* Always render children for proper SSR hydration */}
      <div className={showSplash && mounted ? 'overflow-hidden h-screen' : undefined}>
        {children}
      </div>

      {/* Splash Overlay - renders on top */}
      {showSplash && mounted && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-end ${
            isExiting ? 'animate-splash-exit' : ''
          }`}
        >
          {/* Background Image */}
          <Image
            src="/images/01util.jpg"
            alt="Hay un nuevo vecino en el barrio"
            fill
            className="object-cover"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center pb-16 md:pb-24">
            <p className="font-mono text-xs md:text-sm tracking-widest text-white/70 mb-6">
              @veganneighbor
            </p>

            {/* Enter Button */}
            <button
              onClick={handleEnter}
              className="group relative px-12 py-4 border-2 border-white text-white font-display text-2xl md:text-3xl tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="relative z-10">Entrar</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
