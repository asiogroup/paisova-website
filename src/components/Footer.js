import Link from "next/link";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-subtle)', paddingTop: '4rem', paddingBottom: '2rem', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="grid grid-cols-4 gap-8" style={{ marginBottom: '3rem' }}>
          
          {/* Logo Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ display: 'inline-flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '2rem', color: 'var(--text-dark)', lineHeight: 1 }}>
                pais<span style={{ color: 'var(--primary)' }}>o</span>va
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', letterSpacing: '1px', marginTop: '4px', textTransform: 'uppercase' }}>
                Grow What's Yours.
              </span>
            </Link>
            <p className="text-sm">
              Mutual Funds • Pre-IPO Shares • Alpha Returns • Wealth Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="h4" style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/tools">Investor Toolkit</Link></li>
              <li><Link href="/blog">Insights & Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="h4" style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="text-sm">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="h4" style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Contact Options</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-primary" />
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" style={{ color: 'var(--secondary)', fontWeight: 600 }}>Chat on WhatsApp</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:hello@paisova.com">hello@paisova.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <span>Mon-Sat, 10AM-7PM IST</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Paisova.com. A brand of Lucid Business Ventures Pvt Ltd. All rights reserved.</p>
          <p>SEBI Registration (if applicable). All investments are subject to market risks.</p>
        </div>
      </div>
    </footer>
  );
}
