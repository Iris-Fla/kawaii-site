"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-7xl z-50 transition-all duration-300
          h-16 flex items-center
          md:h-auto md:bg-white/30 md:shadow-lg md:backdrop-blur-md md:rounded-2xl md:border md:border-white/20
          bg-transparent border-none shadow-none
        `}
      >
        <div className="px-4 sm:px-6 w-full">
          <div className="flex justify-between items-center h-16 md:py-4">
            {/* Logo/Site Name（PCのみ表示） */}
            <Link
              href="/"
              className={`items-center mt-2 transition-opacity duration-300 hidden md:block ${
                menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <Image
                src="/title.svg"
                alt="Kawaii Site"
                width={150}
                height={300}
              />
            </Link>

            {/* ハンバーガーメニュー（モバイルのみ表示） */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50 ml-auto"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニューを開く"
            >
              <span className={`block h-0.5 w-6 ${menuOpen ? 'bg-black' : 'bg-white'} transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 my-1 ${menuOpen ? 'bg-black opacity-0' : 'bg-white'} transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 ${menuOpen ? 'bg-black' : 'bg-white'} transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
            
            {/* Navigation（PCのみ表示） */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/about" className="text-white hover:text-pink-500 transition-colors">
                About
              </Link>
              <Link href="/gallery" className="text-white hover:text-pink-500 transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-white hover:text-pink-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {/* モバイル用メニューをheaderの外に移動 */}
      <nav
        className={`
          md:hidden fixed top-0 left-0 w-full h-full
          ${menuOpen ? 'bg-white/80 backdrop-blur-lg' : 'bg-white/80'}
          flex flex-col items-center justify-center space-y-8 z-40 transition-all duration-300
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          rounded-none
        `}
      >
        <Link href="/about" className={`text-2xl transition-colors duration-200 ${menuOpen ? 'text-black' : 'text-pink-500'}`} onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link href="/gallery" className={`text-2xl transition-colors duration-200 ${menuOpen ? 'text-black' : 'text-pink-500'}`} onClick={() => setMenuOpen(false)}>
          Gallery
        </Link>
        <Link href="/about/#contact" className={`text-2xl transition-colors duration-200 ${menuOpen ? 'text-black' : 'text-pink-500'}`} onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </nav>
    </>
  )
}
