'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
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

  if (!showSplash) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-end bg-vn-black ${
        isExiting ? 'animate-splash-exit' : ''
      }`}
    >
      <Image
        src="/images/01util.jpg"
        alt="Hay un nuevo vecino en el barrio"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center pb-16 md:pb-24">
        <p className="font-mono text-xs md:text-sm tracking-widest text-white/70 mb-6">
          @veganneighbor
        </p>

        <button
          onClick={handleEnter}
          className="px-12 py-4 border-2 border-white text-white font-display text-2xl md:text-3xl tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-black"
        >
          Entrar
        </button>
      </div>
    </div>
  )
}
