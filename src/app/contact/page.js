import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contact Us | Paisova",
  description: "Get in touch with Paisova for your financial planning and investment needs.",
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      {/* Contact Header */}
      <div className="tools-page-header" style={{ padding: '6rem 0 4rem' }}>
        <div className="container">
          <h1 style={{ marginBottom: '1rem' }}>We're Here to Help</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
            Ready to take control of your financial future? Reach out to us for expert guidance, or just to say hello. Our team is ready to answer your questions.
          </p>
        </div>
      </div>

      <div className="container section">
        <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'flex-start' }}>
          
          {/* Left Column: Contact Info & WhatsApp */}
          <div className="flex-col gap-6">
            <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Let's talk about your wealth.</h2>
            <p className="text-lead" style={{ marginBottom: '2.5rem' }}>
              Whether you want to discuss curated opportunities or need a comprehensive financial plan, drop us a message.
            </p>

            <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
              <div className="flex items-center gap-4" style={{ marginBottom: '1rem' }}>
                <div style={{ color: 'var(--primary)', backgroundColor: 'var(--primary-light)', padding: '0.75rem', borderRadius: '50%' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>Email Us</h4>
                  <a href="mailto:hello@paisova.com" style={{ color: 'var(--text-body)', fontSize: '0.9rem' }}>hello@paisova.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4" style={{ marginBottom: '1rem' }}>
                <div style={{ color: 'var(--primary)', backgroundColor: 'var(--primary-light)', padding: '0.75rem', borderRadius: '50%' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>Call Us</h4>
                  <a href="tel:+919889885105" style={{ color: 'var(--text-body)', fontSize: '0.9rem' }}>+91 98898 85105</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div style={{ color: 'var(--primary)', backgroundColor: 'var(--primary-light)', padding: '0.75rem', borderRadius: '50%' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>Visit Us</h4>
                  <span style={{ color: 'var(--text-body)', fontSize: '0.9rem' }}>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="cta-capsule" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Need a quick answer?</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0', maxWidth: '100%' }}>Message us directly on WhatsApp.</p>
              </div>
              <a 
                href="https://wa.me/919889885105?text=Hi%20Paisova,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
                style={{ flexShrink: 0, padding: '0.75rem 1.5rem' }}
              >
                <MessageCircle size={18} /> Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send a Message</h3>
            <form 
              action="https://formspree.io/f/placeholder" 
              method="POST" 
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-dark)' }}>Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="John Doe"
                  style={{ padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontFamily: 'inherit', fontSize: '0.95rem' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-dark)' }}>Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="john@example.com"
                  style={{ padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontFamily: 'inherit', fontSize: '0.95rem' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="subject" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-dark)' }}>Subject</label>
                <select 
                  id="subject" 
                  name="subject"
                  style={{ padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontFamily: 'inherit', fontSize: '0.95rem', backgroundColor: 'white' }}
                >
                  <option value="Investment Advisory">Investment Advisory</option>
                  <option value="Portfolio Review">Portfolio Review</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-dark)' }}>Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  required 
                  placeholder="How can we help you?"
                  style={{ padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontFamily: 'inherit', fontSize: '0.95rem', resize: 'vertical' }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
