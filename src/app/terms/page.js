import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Paisova",
  description: "The terms and conditions governing your use of the Paisova website and services.",
};

const sectionStyle = { marginTop: "2.5rem" };
const h2Style = { fontSize: "1.4rem", marginBottom: "0.85rem" };

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-main)" }}>
      <div className="tools-page-header" style={{ padding: "6rem 0 3rem" }}>
        <div className="container">
          <h1 style={{ marginBottom: "1rem" }}>Terms &amp; Conditions</h1>
          <p style={{ maxWidth: "620px", margin: "0 auto", opacity: 0.9 }}>
            Please read these terms carefully before using Paisova. By accessing our website or
            services, you agree to be bound by them.
          </p>
        </div>
      </div>

      <div className="container section prose" style={{ maxWidth: "820px" }}>
        <p style={{ color: "var(--text-light)" }}>Last updated: July 2026</p>

        <section style={sectionStyle}>
          <h2 style={h2Style}>1. Acceptance of these terms</h2>
          <p>
            These Terms &amp; Conditions ("Terms") govern your access to and use of the Paisova
            website, content, tools, and services (together, the "Services"). By using the Services,
            you confirm that you have read, understood, and agree to these Terms. If you do not
            agree, please do not use the Services.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>2. Who we are</h2>
          <p>
            Paisova is a brand operated by Lucid Business Ventures Private Limited. We help investors
            discover and access financial products — including mutual funds, unlisted and pre-IPO
            shares, and other opportunities — primarily as a <strong>distributor and referral
            partner</strong> working on a commission basis with product providers and platforms.
          </p>
          <p>
            Paisova is <strong>not a SEBI-registered Investment Adviser or Portfolio Manager</strong>,
            and nothing on this website should be treated as personalised investment advice. You can
            learn more about our approach on our <Link href="/about">About Us</Link> page.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>3. Information, not advice</h2>
          <p>
            All content on Paisova — articles, tools, calculators, and market commentary — is provided
            for general educational and informational purposes only. It does not constitute investment,
            legal, tax, or financial advice, nor a recommendation or solicitation to buy or sell any
            security or product.
          </p>
          <p>
            You are responsible for your own investment decisions. Before investing, you should
            consider your personal circumstances and, where appropriate, consult a qualified,
            registered professional.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>4. Eligibility</h2>
          <p>
            You must be at least 18 years of age and legally capable of entering into a binding
            contract under Indian law to use the Services. By using Paisova, you represent that you
            meet these requirements and that all information you provide is accurate.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>5. Investment risks</h2>
          <p>
            Investments are subject to market risks. The value of investments can go down as well as
            up, and you may get back less than you invested. Past performance is not a reliable
            indicator of future results, and no returns are assured or guaranteed. Certain products,
            such as unlisted and pre-IPO shares and derivatives, carry higher risks including
            illiquidity and loss of capital.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>6. Third-party products and platforms</h2>
          <p>
            Where we facilitate access to products or platforms operated by third parties, those
            products are governed by the third party's own terms, documents, and risk disclosures.
            Paisova does not control and is not responsible for the products, decisions, or conduct of
            these third parties. You should read all offer and scheme-related documents carefully
            before investing.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>7. Our commissions and disclosures</h2>
          <p>
            Paisova may earn commissions, referral fees, or similar compensation from product
            providers and platforms when you invest through us. This is how we are primarily
            remunerated. We aim to be transparent about this; however, you acknowledge that such
            arrangements exist and that they do not create an advisory relationship between you and
            Paisova.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>8. Your responsibilities</h2>
          <p>When using the Services, you agree not to:</p>
          <ul>
            <li>Provide false, misleading, or incomplete information;</li>
            <li>Use the Services for any unlawful, fraudulent, or unauthorised purpose;</li>
            <li>Attempt to disrupt, damage, or gain unauthorised access to the website or its systems;</li>
            <li>Reproduce, copy, or redistribute our content without permission.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>9. Intellectual property</h2>
          <p>
            All content on this website — including text, graphics, logos, and the Paisova brand — is
            owned by or licensed to Lucid Business Ventures Private Limited and is protected by
            applicable intellectual property laws. You may not use it without our prior written
            consent, except for personal, non-commercial reference.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>10. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Paisova and Lucid Business Ventures Private Limited
            shall not be liable for any direct, indirect, incidental, or consequential loss arising
            from your use of the Services, reliance on any content, or any investment decision you
            make. The Services are provided on an "as is" and "as available" basis.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Paisova, Lucid Business Ventures Private Limited,
            and its team from any claims, losses, or expenses arising out of your misuse of the
            Services or your breach of these Terms.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>12. Changes to these terms</h2>
          <p>
            We may update these Terms from time to time. Any changes will be posted on this page with
            a revised "Last updated" date. Your continued use of the Services after changes are posted
            constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>13. Governing law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be subject to the
            exclusive jurisdiction of the courts of New Delhi, India.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>14. Contact us</h2>
          <p>
            If you have questions about these Terms, please <Link href="/contact">get in touch</Link>.
            You can also read our <Link href="/privacy">Privacy Policy</Link> to understand how we
            handle your data.
          </p>
        </section>
      </div>
    </div>
  );
}
