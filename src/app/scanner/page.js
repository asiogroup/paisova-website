export const metadata = {
  title: 'Paisova Scanner',
  description: 'Real-time scanner for Paisova investors.',
};

export default function Scanner() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 80px)' }}>
      <div className="container" style={{ padding: '1rem 1.5rem' }}>
        <h1 className="h2" style={{ marginBottom: 0 }}>Paisova Scanner</h1>
      </div>
      <div style={{ flex: 1, width: '100%', position: 'relative', overflow: 'hidden' }}>
        <iframe 
          src="https://intraday-dashboard-self.vercel.app" 
          style={{ width: '100%', height: 'calc(100% + 100px)', border: 'none', position: 'absolute', top: '-100px', left: 0 }}
          title="Paisova Scanner"
          allowFullScreen
        />
      </div>
    </div>
  );
}
