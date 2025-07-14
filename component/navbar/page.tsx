"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting)
      },
      { threshold: 0.4 } // Adjust threshold as needed
    )
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current)
    }
    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current)
    }
  }, [])

  return (
    <>
      <div ref={sentinelRef} style={{ position: 'absolute', top: 0, height: "100vh", width: '100%' }} />
      <div
        className={`w-full h-[80px] flex items-center px-8 justify-between fixed top-0 left-0 z-50 transition-colors duration-700 ${scrolled ? 'bg-[#ffffff] backdrop-blur-[10px] shadow-lg' : ''
          }`}
      >
        {!scrolled && (
          <div className="absolute h-[220px] inset-0 bg-gradient-to-b from-black to-transparent pointer-events-none transition-opacity duration-300" />
        )}

        {scrolled ? (
          <Image
            src="/qorex_black.png"
            alt="Logo"
            width={968}
            height={300}
            className="h-[50px] w-fit aspect-auto object-contain relative z-10"
          />
        ) : (
          <Image
            src="/qorex_white.png"
            alt="Logo"
            width={968}
            height={300}
            className="h-[50px] w-fit aspect-auto object-contain relative z-10"
          />
        )}

        <span className={`z-1 flex gap-12 transition-colors duration-300`}>
          <Link tabIndex={1} href="/" className={`${scrolled ? 'text-black' : 'text-white'} text-base font-medium hover:text-[#0066FF] transition-colors`}>HOME</Link>
          <Link tabIndex={2} href="/" className={`${scrolled ? 'text-black' : 'text-white'} text-base font-medium hover:text-[#0066FF] transition-colors`}>ABOUT QOREX</Link>
          <Link tabIndex={3} href="/" className={`${scrolled ? 'text-black' : 'text-white'} text-base font-medium hover:text-[#0066FF] transition-colors`}>BRANDS</Link>
          <Link tabIndex={4} href="/" className={`${scrolled ? 'text-black' : 'text-white'} text-base font-medium hover:text-[#0066FF] transition-colors`}>CONTACT US</Link>
        </span>
      </div>
    </>
  )
}

export default NavbarComponent