export const metadata = {
  title: 'Paisova Intraday Scanner',
  description: 'Real-time intraday scanner for Paisova investors.',
};

export default function Scanner() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 80px)' }}>
      <div className="container" style={{ padding: '1rem 1.5rem' }}>
        <h1 className="h2" style={{ marginBottom: 0 }}>Paisova Intraday Scanner</h1>
      </div>
      <div style={{ flex: 1, width: '100%', position: 'relative' }}>
        <iframe 
          src="https://intraday-dashboard-self.vercel.app" 
          style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', top: 0, left: 0 }}
          title="Paisova Intraday Scanner"
          allowFullScreen
        />
      </div>
    </div>
  );
}
