"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container flex items-center justify-between">
        <Link href="/" style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-dark)', lineHeight: 1 }}>
            Pais<span style={{ color: 'var(--primary)' }}>o</span>va
          </span>
          <span style={{ fontSize: '0.6rem', color: 'var(--text-light)', letterSpacing: '0.5px', marginTop: '2px' }}>Grow What's Yours.</span>
        </Link>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>Invest</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Learn</Link>
          <Link href="/tools" onClick={() => setIsMenuOpen(false)}>Tools</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>

        <div className="desktop-only-btn" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button aria-label="Search" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dark)', padding: '0.5rem' }}>
            <Search size={20} />
          </button>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
