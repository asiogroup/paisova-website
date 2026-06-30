import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <h3>Pais<span>o</span>va</h3>
            <p className="tagline">Grow What's Yours.</p>
            <p className="copyright">
              © {new Date().getFullYear()} Paisova by Lucid Business<br/>
              Ventures Pvt Ltd. All rights reserved.
            </p>
          </div>

          {/* Invest */}
          <div className="footer-col">
            <h4>Invest</h4>
            <ul>
              <li><Link href="/services">Pre IPO</Link></li>
              <li><Link href="/services">Mutual Funds</Link></li>
              <li><Link href="/services">Stocks</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div className="footer-col">
            <h4>Learn</h4>
            <ul>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/blog">Market Insights</Link></li>
              <li><Link href="/blog">Investing Basics</Link></li>
              <li><Link href="/blog">Videos</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div className="footer-col">
            <h4>Tools</h4>
            <ul>
              <li><Link href="/tools">Calculators</Link></li>
              <li><Link href="/tools">SIP Calculator</Link></li>
              <li><Link href="/tools">Goal Planner</Link></li>
              <li><Link href="/tools">All Tools</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>SEBI Registration (if applicable). All investments are subject to market risks.</p>
          <p>paisova.com</p>
        </div>
      </div>
    </footer>
  );
}
