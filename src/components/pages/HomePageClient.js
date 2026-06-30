"use client";

import { useTina } from "tinacms/dist/react";
import Link from "next/link";
import { TrendingUp, Rocket, ShieldCheck } from "lucide-react";
import { tinaField } from "tinacms/dist/react";

const iconMap = {
  TrendingUp: TrendingUp,
  Rocket: Rocket,
  ShieldCheck: ShieldCheck,
};

export default function HomePageClient(props) {
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
          default:
            return null;
        }
      })}
    </>
  );
}
