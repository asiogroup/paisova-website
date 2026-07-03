"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container flex items-center justify-between">
          
          <Link href="/" className="logo-link">
            <img src="/logo.png" alt="Paisova" className="site-logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-menu desktop-only-btn">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)}>Invest</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Learn</Link>
            <Link href="/tools" onClick={() => setIsMenuOpen(false)}>Tools</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>

          {/* Top Right Desktop Buttons */}
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

      {/* Mobile Menu Overlay */}
      <nav className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>Invest</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Learn</Link>
          <Link href="/tools" onClick={() => setIsMenuOpen(false)}>Tools</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </nav>

      {/* Sticky Mobile Bottom Nav */}
      <div className="mobile-bottom-nav">
        <Link href="/" className="bottom-nav-item" onClick={() => setIsMenuOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Home</span>
        </Link>
        <Link href="/services" className="bottom-nav-item" onClick={() => setIsMenuOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          <span>Sub</span>
        </Link>
        <Link href="/tools" className="bottom-nav-item" onClick={() => setIsMenuOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          <span>Tools</span>
        </Link>
        <button className="bottom-nav-item" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
          <span>Menu</span>
        </button>
      </div>
    </>
  );
}
