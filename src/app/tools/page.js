import ToolsDashboard from "../../components/tools/ToolsDashboard";

export const metadata = {
  title: "Investor Toolkit | Paisova",
  description: "Plan, compare, and visualize your financial future with Paisova's interactive financial calculators.",
};

export default function ToolsPage() {
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="tools-page-header">
        <h1>Investor Toolkit</h1>
        <p>Plan. Compare. Visualize.</p>
      </div>
      
      <div className="container" style={{ marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
        <ToolsDashboard />
      </div>
    </div>
  );
}
