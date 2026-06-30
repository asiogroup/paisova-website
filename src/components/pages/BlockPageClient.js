"use client";

import { useTina } from "tinacms/dist/react";
import Link from "next/link";
import { TrendingUp, Rocket, ShieldCheck, Target, Search, BarChart, Briefcase, Calculator, PieChart, ShieldAlert } from "lucide-react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const iconMap = {
  TrendingUp: TrendingUp,
  Rocket: Rocket,
  ShieldCheck: ShieldCheck,
  Target: Target,
  Search: Search,
  BarChart: BarChart,
  Briefcase: Briefcase,
  Calculator: Calculator,
  PieChart: PieChart,
  ShieldAlert: ShieldAlert,
};

export default function BlockPageClient(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.page;
  const blocks = page.blocks || [];

  return (
    <>
      {blocks.map((block, i) => {
        switch (block.__typename) {
          case "PageBlocksHero":
            return (
              <section key={i} className="hero" data-tina-field={tinaField(block)}>
                <div className="container">
                  <h1 data-tina-field={tinaField(block, "headline")}>{block.headline}</h1>
                  <p className="subtitle" data-tina-field={tinaField(block, "subheadline")}>
                    {block.subheadline}
                  </p>
                  <div className="hero-buttons">
                    {block.primaryButtonText && (
                      <Link href={block.primaryButtonLink || "/"} className="btn btn-primary" data-tina-field={tinaField(block, "primaryButtonText")}>
                        {block.primaryButtonText}
                      </Link>
                    )}
                    {block.secondaryButtonText && (
                      <Link href={block.secondaryButtonLink || "/"} className="btn btn-outline" data-tina-field={tinaField(block, "secondaryButtonText")}>
                        {block.secondaryButtonText}
                      </Link>
                    )}
                  </div>
                </div>
              </section>
            );
          case "PageBlocksStats":
            return (
              <section key={i} className="stats-section" data-tina-field={tinaField(block)}>
                <div className="container">
                  <div className="stats-row">
                    {(block.statItems || []).map((stat, idx) => (
                      <div key={idx} className="stat-item" data-tina-field={tinaField(stat)}>
                        <h2 data-tina-field={tinaField(stat, "value")}>{stat.value}</h2>
                        <p data-tina-field={tinaField(stat, "label")}>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "PageBlocksFeatures":
            return (
              <section key={i} className="features-section" data-tina-field={tinaField(block)}>
                <div className="container">
                  <div className="section-header">
                    <h2>Why Paisova?</h2>
                    <p>We provide a comprehensive suite of financial services tailored to your goals.</p>
                  </div>
                  <div className="features-grid">
                    {(block.featureItems || []).map((feature, idx) => {
                      const Icon = iconMap[feature.iconName] || TrendingUp;
                      return (
                        <div key={idx} className="feature-item" data-tina-field={tinaField(feature)}>
                          <div className="feature-icon">
                            <Icon size={24} />
                          </div>
                          <h3 data-tina-field={tinaField(feature, "title")}>{feature.title}</h3>
                          <p data-tina-field={tinaField(feature, "description")}>{feature.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          case "PageBlocksRichText":
            return (
              <section key={i} className="content-section" data-tina-field={tinaField(block)}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
                  {block.heading && <h2 data-tina-field={tinaField(block, "heading")} style={{ marginBottom: '2rem' }}>{block.heading}</h2>}
                  <div className="prose" data-tina-field={tinaField(block, "body")}>
                    <TinaMarkdown content={block.body} />
                  </div>
                </div>
              </section>
            );
          case "PageBlocksFaq":
            return (
              <section key={i} className="faq-section" data-tina-field={tinaField(block)} style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
                  <h2 data-tina-field={tinaField(block, "title")} style={{ textAlign: 'center', marginBottom: '3rem' }}>{block.title}</h2>
                  <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {(block.questions || []).map((q, idx) => (
                      <div key={idx} className="faq-item" data-tina-field={tinaField(q)} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <h3 data-tina-field={tinaField(q, "question")} style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{q.question}</h3>
                        <p data-tina-field={tinaField(q, "answer")} style={{ color: '#475569' }}>{q.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "PageBlocksProcess":
            return (
              <section key={i} className="process-section" data-tina-field={tinaField(block)} style={{ padding: '4rem 0' }}>
                <div className="container" style={{ padding: '0 1.5rem' }}>
                  <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 data-tina-field={tinaField(block, "title")}>{block.title}</h2>
                    {block.subtitle && <p data-tina-field={tinaField(block, "subtitle")} style={{ color: '#64748b', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>{block.subtitle}</p>}
                  </div>
                  <div className="process-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {(block.steps || []).map((step, idx) => (
                      <div key={idx} className="process-step" data-tina-field={tinaField(step)} style={{ position: 'relative' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary)', opacity: 0.2, marginBottom: '1rem' }}>{idx + 1}</div>
                        <h3 data-tina-field={tinaField(step, "title")} style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                        <p data-tina-field={tinaField(step, "description")} style={{ color: '#475569' }}>{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "PageBlocksServicesGrid":
            return (
              <section key={i} className="services-grid-section" data-tina-field={tinaField(block)} style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
                <div className="container" style={{ padding: '0 1.5rem' }}>
                  <h2 data-tina-field={tinaField(block, "title")} style={{ textAlign: 'center', marginBottom: '3rem' }}>{block.title}</h2>
                  <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {(block.services || []).map((service, idx) => {
                      const Icon = iconMap[service.iconName] || TrendingUp;
                      return (
                        <div key={idx} className="service-card" data-tina-field={tinaField(service)} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                          <Icon size={32} style={{ color: 'var(--primary)', marginBottom: '1.5rem' }} />
                          <h3 data-tina-field={tinaField(service, "title")} style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.title}</h3>
                          <p data-tina-field={tinaField(service, "description")} style={{ color: '#475569', marginBottom: '1.5rem', lineHeight: 1.6 }}>{service.description}</p>
                          {(service.tags && service.tags.length > 0) && (
                            <div>
                              <strong style={{ fontSize: '0.875rem', color: '#64748b', display: 'block', marginBottom: '0.5rem' }}>Ideal For:</strong>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {service.tags.map((tag, tIdx) => (
                                  <span key={tIdx} style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 500 }}>{tag}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          case "PageBlocksResourcesList":
            return (
              <section key={i} className="resources-section" data-tina-field={tinaField(block)} style={{ padding: '4rem 0' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
                  <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 data-tina-field={tinaField(block, "title")}>{block.title}</h2>
                    {block.subtitle && <p data-tina-field={tinaField(block, "subtitle")} style={{ color: '#64748b', marginTop: '1rem' }}>{block.subtitle}</p>}
                  </div>
                  <div className="resources-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {(block.resources || []).map((resource, idx) => (
                      <Link key={idx} href={resource.url || "#"} className="resource-item" data-tina-field={tinaField(resource)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', textDecoration: 'none', color: 'inherit', transition: 'all 0.2s' }}>
                        <span style={{ fontWeight: 500, fontSize: '1.125rem' }}>{resource.label}</span>
                        <span style={{ color: 'var(--primary)' }}>→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            );
            return null;
        }
      })}
    </>
  );
}
