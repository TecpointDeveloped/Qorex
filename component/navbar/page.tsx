"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

function NavbarComponent({ color, position, darktheme }: { color?: string, darktheme?: boolean, position?: React.CSSProperties['position'] }) {
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
      <div ref={sentinelRef} style={{ position: "absolute", top: 0, height: "auto", width: '100%' }} />
      <div
        className={`w-full h-[80px] flex items-center px-8 justify-between ${position || "relative"} top-0 left-0 z-50 ${color || "bg-white"} transition-colors duration-300`}
      >
        {/* {!scrolled && (
          <div className="absolute h-[220px] inset-0 bg-gradient-to-b from-black to-transparent pointer-events-none transition-opacity duration-300" />
        )} */}

        {darktheme ? (
          <Image
            src="/qorex_white.png"
            alt="Logo"
            width={968}
            height={300}
            className="h-[50px] w-fit aspect-auto object-contain relative z-10"
          />
        ) : (
          <Image
            src="/qorex_black.png"
            alt="Logo"
            width={968}
            height={300}
            className="h-[50px] w-fit aspect-auto object-contain relative z-10"
          />
        )}


        <span className={`z-1 flex gap-12 transition-colors duration-300 items-center justify-center`}>
          <Link
            tabIndex={1}
            href="/"
            className={`text-base font-medium hover:text-[#0066FF] transition-colors ${darktheme ? "text-white" : "text-black"}`}
          >
            HOME
          </Link>
          <Link
            tabIndex={2}
            href="/"
            className={`text-base font-medium hover:text-[#0066FF] transition-colors ${darktheme ? "text-white" : "text-black"}`}
          >
            ABOUT QOREX
          </Link>
          <Link
            tabIndex={3}
            href="/brands"
            className={`text-base font-medium hover:text-[#0066FF] transition-colors ${darktheme ? "text-white" : "text-black"}`}
          >
            BRANDS
          </Link>
          <Link
            tabIndex={4}
            href="/"
            className='text-base font-medium bg-[#0066FF] py-3 px-6 rounded-full text-white transition-colors'
          >
            CONTACT US
          </Link>
        </span>
      </div>
    </>
  )
}

export default NavbarComponent