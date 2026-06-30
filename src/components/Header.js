"use client";
import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ 
      position: 'sticky', 
      top: 0, 
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-light)',
      zIndex: 100,
      padding: '1rem 0' 
    }}>
      <div className="container flex items-center justify-between">
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-dark)', lineHeight: 1 }}>
            pais<span style={{ color: 'var(--primary)' }}>o</span>va
          </span>
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/tools" onClick={() => setIsMenuOpen(false)}>Tools</Link>
          <Link href="/scanner" onClick={() => setIsMenuOpen(false)}>Scanner</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn btn-whatsapp mobile-only-btn" style={{ marginTop: '1rem', width: '100%' }}>
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </nav>

        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn btn-whatsapp desktop-only-btn">
          <MessageCircle size={18} />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
