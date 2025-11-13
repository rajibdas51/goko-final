"use client"

import type React from "react"
import Link from "next/link"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  classNames?: string
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  onClick,
  classNames = "",
}) => {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    // Smooth scroll for in-page anchors
    if (href.startsWith("#")) {
      e.preventDefault()
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    // Still allow parent handlers (e.g., close mobile menu)
    if (onClick) onClick(e)
  }

  // Use plain <a> for hash links so browser handles focus/history smoothly
  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`text-[#D4A574] hover:text-[#F4C542] transition-colors text-sm md:text-base font-medium uppercase tracking-wide ${classNames}`}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-[#D4A574] hover:text-[#F4C542] transition-colors text-sm md:text-base font-medium uppercase tracking-wide ${classNames}`}
    >
      {children}
    </Link>
  )
}
