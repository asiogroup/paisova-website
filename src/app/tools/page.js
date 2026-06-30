import ToolsDashboard from "../../components/tools/ToolsDashboard";

export const metadata = {
  title: "Investor Toolkit | Paisova",
  description: "Plan, compare, and visualize your financial future with Paisova's interactive financial calculators.",
};

export default function ToolsPage() {
  return (
    <div className="tools-page-container" style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="section-header text-center" style={{ padding: '4rem 1.5rem', backgroundColor: 'var(--primary)', color: 'white' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Investor Toolkit</h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>Plan. Compare. Visualize.</p>
      </div>
      
      <div className="container" style={{ marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
        <ToolsDashboard />
      </div>
    </div>
  );
}
