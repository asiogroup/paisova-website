import Link from "next/link";
import { ArrowRight, TrendingUp, CheckCircle, Award, Users, PieChart, Shield, Target } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '8rem' }}>
        <div className="container grid grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in" style={{ zIndex: 10 }}>
            <h1 className="h1" style={{ marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
              Smart Money <br/>
              <span style={{ color: 'var(--primary)' }}>Starts Here.</span>
            </h1>
            <p className="text-lead" style={{ marginBottom: '2rem', maxWidth: '480px' }}>
              Mutual Funds • Pre-IPO Shares • Alpha Returns • Wealth Solutions — curated for serious investors.
            </p>
            <div className="flex gap-4 hero-buttons">
              <Link href="/services" className="btn btn-primary">
                Start My Investment Journey <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="btn btn-outline">
                Explore Our Services
              </Link>
            </div>
            
            {/* Stats Row */}
            <div className="flex justify-between items-center stats-row" style={{ marginTop: '4rem', padding: '1.5rem 0', borderTop: '1px solid var(--border-light)' }}>
              <div className="flex items-center gap-2">
                <div style={{ color: 'var(--primary)' }}><PieChart size={24} /></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-dark)' }}>₹250+ Cr</div>
                  <div className="text-xs text-light">Managed</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ color: 'var(--primary)' }}><Users size={24} /></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-dark)' }}>1,250+</div>
                  <div className="text-xs text-light">Clients</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ color: 'var(--primary)' }}><Award size={24} /></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-dark)' }}>15+</div>
                  <div className="text-xs text-light">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Abstract Graphic representing growth */}
            <div style={{
              width: '400px', height: '400px',
              background: 'linear-gradient(135deg, rgba(201, 152, 57, 0.1) 0%, rgba(201, 152, 57, 0.05) 100%)',
              borderRadius: 'var(--radius-full)',
              position: 'absolute',
              top: '50%', right: '-10%',
              transform: 'translateY(-50%)',
              zIndex: 0
            }}></div>
             <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '240px' }}>
                {/* Bar Chart Graphic */}
                <div style={{ width: '30px', height: '40%', background: 'var(--primary)', borderRadius: '4px 4px 0 0', opacity: 0.4 }}></div>
                <div style={{ width: '30px', height: '55%', background: 'var(--primary)', borderRadius: '4px 4px 0 0', opacity: 0.6 }}></div>
                <div style={{ width: '30px', height: '70%', background: 'var(--primary)', borderRadius: '4px 4px 0 0', opacity: 0.8 }}></div>
                <div style={{ width: '30px', height: '90%', background: 'var(--primary)', borderRadius: '4px 4px 0 0', opacity: 1 }}></div>
                
                {/* Trend line overlay */}
                <TrendingUp size={120} color="var(--primary)" style={{ position: 'absolute', right: '-40px', top: '-60px', opacity: 0.2 }} />
             </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="h2">What We Do</h2>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { title: "Mutual Funds", icon: <TrendingUp size={32}/>, desc: "Diversified portfolios, curated for your goals" },
              { title: "Pre-IPO Shares", icon: <Award size={32}/>, desc: "Access high-growth companies before they list" },
              { title: "Alpha Returns", icon: <CheckCircle size={32}/>, desc: "Strategies that aim to beat the benchmark" },
              { title: "Smart Investing Solutions", icon: <PieChart size={32}/>, desc: "Advisory built around your life stage" },
            ].map((service, i) => (
              <div key={i} className="card text-center items-center" style={{ padding: '2.5rem 1.5rem' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', background: 'var(--bg-subtle)', padding: '1rem', borderRadius: '50%' }}>
                  {service.icon}
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Paisova */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="h2">Why Paisova</h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: "Conflict-Free Advice", icon: <Shield size={28} />, desc: "We don't sell products. We build portfolios that align with your goals." },
              { title: "Research-Backed Picks", icon: <Target size={28} />, desc: "Rigorous research and due diligence to identify the best investment opportunities." },
              { title: "Personalised to You", icon: <Users size={28} />, desc: "Every portfolio is customised for your financial goals, risk profile and life stage." },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 feature-item">
                <div style={{ color: 'var(--primary)' }}>{feature.icon}</div>
                <div>
                  <h4 className="h4" style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{feature.title}</h4>
                  <p className="text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(to right, var(--bg-subtle), rgba(201, 152, 57, 0.1))',
            padding: '4rem',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center'
          }}>
            <h2 className="h2" style={{ marginBottom: '1rem' }}>Ready to make your money work harder?</h2>
            <p className="text-lead" style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Talk to a Paisova advisor and take the first step towards your financial freedom.
            </p>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              Talk to a Paisova Advisor on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
