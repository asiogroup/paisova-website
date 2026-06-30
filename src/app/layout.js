import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalThemeProvider from "@/components/GlobalThemeProvider";
import client from "../../tina/__generated__/client";

export const metadata = {
  title: "Paisova | Grow What's Yours",
  description: "Mutual Funds, Pre-IPO Shares, Alpha Returns, Wealth Solutions - curated for serious investors.",
};

export default async function RootLayout({ children }) {
  // Fetch global theme data
  const globalResponse = await client.queries.global({ relativePath: "index.json" }).catch(() => null);
  const data = globalResponse?.data;
  const query = globalResponse?.query;
  const variables = globalResponse?.variables;

  return (
    <html lang="en">
      <body>
        <GlobalThemeProvider data={data} query={query} variables={variables}>
          <Header />
          <main style={{ minHeight: '80vh' }}>
            {children}
          </main>
          <Footer />
        </GlobalThemeProvider>
      </body>
    </html>
  );
}
