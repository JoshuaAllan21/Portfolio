'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BurgerIcon, CloseIcon } from '../../utils/icons'
import Logo from './Logo'

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Dissertation', href: '/#dissertation' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Education', href: '/#education' },
  { label: 'Contact', href: '/#contact' },
]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsVisible((prev) => !prev)

  return (
    <nav className="bg-primary/95 border-border sticky top-0 z-50 h-16 border-b backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" onClick={() => setIsVisible(false)} aria-label="Joshua Allan — Home">
          <div className="text-primary-content flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
            <Logo />
            <span className="font-medium">Joshua Allan</span>
          </div>
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          aria-label={isVisible ? 'Close menu' : 'Open menu'}
          aria-expanded={isVisible}
          className="text-primary-content md:hidden">
          {isVisible ? <CloseIcon /> : <BurgerIcon />}
        </button>

        {/* Nav links */}
        <ul
          className={`${isVisible ? 'flex' : 'hidden'} animate-fade-in bg-primary/95 border-border absolute top-16 left-0 z-10 h-dvh w-full flex-col border-b backdrop-blur-md md:static md:flex md:h-auto md:w-auto md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:backdrop-blur-none`}>
          {navItems.map(({ label, href }) => (
            <li key={href} onClick={() => setIsVisible(false)}>
              <Link
                href={href}
                className={`text-primary-content hover:text-accent block px-4 py-5 text-2xl transition-colors duration-150 md:py-1 md:text-sm ${pathname === href ? 'text-accent' : ''}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
