import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Paisova",
  description: "How Paisova collects, uses, and protects your personal information.",
};

const sectionStyle = { marginTop: "2.5rem" };
const h2Style = { fontSize: "1.4rem", marginBottom: "0.85rem" };

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-main)" }}>
      <div className="tools-page-header" style={{ padding: "6rem 0 3rem" }}>
        <div className="container">
          <h1 style={{ marginBottom: "1rem" }}>Privacy Policy</h1>
          <p style={{ maxWidth: "620px", margin: "0 auto", opacity: 0.9 }}>
            Your privacy matters to us. This policy explains what information we collect, why we
            collect it, and how we keep it safe.
          </p>
        </div>
      </div>

      <div className="container section prose" style={{ maxWidth: "820px" }}>
        <p style={{ color: "var(--text-light)" }}>Last updated: July 2026</p>

        <section style={sectionStyle}>
          <h2 style={h2Style}>1. Introduction</h2>
          <p>
            This Privacy Policy describes how Paisova, a brand of Lucid Business Ventures Private
            Limited ("we", "us", "our"), collects and processes your personal information when you use
            our website and services. By using Paisova, you agree to the practices described here.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>2. Information we collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Information you provide:</strong> your name, email address, phone number, and any
              details you share through our contact form, WhatsApp, or during onboarding.
            </li>
            <li>
              <strong>Usage information:</strong> how you interact with our website, such as pages
              viewed, links clicked, and tools used.
            </li>
            <li>
              <strong>Technical information:</strong> your device type, browser, and approximate
              location, collected automatically through cookies and similar technologies.
            </li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>3. How we use your information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to your enquiries and provide the services you request;</li>
            <li>Facilitate access to financial products through our partners;</li>
            <li>Improve our website, content, and tools;</li>
            <li>Send you relevant updates or communications, where you have agreed to receive them;</li>
            <li>Comply with legal and regulatory obligations.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>4. Cookies and tracking</h2>
          <p>
            We use cookies and similar technologies to make the website work, remember your
            preferences, and understand how it is used. You can control or disable cookies through your
            browser settings, though some features may not function properly without them.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>5. How we share your information</h2>
          <p>We do not sell your personal information. We may share it only:</p>
          <ul>
            <li>
              With product providers or platforms, when necessary to facilitate an investment you have
              requested;
            </li>
            <li>With trusted service providers who help us operate our website and communications;</li>
            <li>Where required by law, regulation, or a valid legal request.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>6. Data security</h2>
          <p>
            We take reasonable technical and organisational measures to protect your information
            against unauthorised access, loss, or misuse. However, no method of transmission or storage
            is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>7. Data retention</h2>
          <p>
            We keep your personal information only for as long as necessary to fulfil the purposes
            described in this policy, or as required by applicable law, after which it is securely
            deleted or anonymised.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>8. Your rights</h2>
          <p>
            Subject to applicable law, you may request access to, correction of, or deletion of your
            personal information, and you may withdraw consent to marketing communications at any time.
            To exercise these rights, please <Link href="/contact">contact us</Link>.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>9. Third-party links</h2>
          <p>
            Our website may contain links to third-party sites and platforms. We are not responsible
            for the privacy practices or content of those sites. We encourage you to review their
            privacy policies before sharing any information.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>10. Children's privacy</h2>
          <p>
            Our services are intended for individuals aged 18 and above. We do not knowingly collect
            personal information from minors. If you believe a minor has provided us information, please
            contact us so we can remove it.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>11. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with a revised "Last updated" date. We encourage you to review it periodically.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>12. Contact us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your data, please{" "}
            <Link href="/contact">reach out to us</Link>. You can also review our{" "}
            <Link href="/terms">Terms &amp; Conditions</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
