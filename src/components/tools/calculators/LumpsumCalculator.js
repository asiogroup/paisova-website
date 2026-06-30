"use client";

import { useState, useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const formatCurrency = (value) => {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)} Cr`;
  } else if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)} L`;
  } else {
    return `₹${value.toLocaleString('en-IN')}`;
  }
};

export default function LumpsumCalculator() {
  const [lumpsum, setLumpsum] = useState(100000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [durationYears, setDurationYears] = useState(10);

  // Calculate Lumpsum Projection
  const projectionData = useMemo(() => {
    const data = [];
    let futureValue = lumpsum;
    const annualRate = expectedReturn / 100;

    data.push({
      year: `Year 0`,
      invested: lumpsum,
      wealth: lumpsum,
    });

    for (let year = 1; year <= durationYears; year++) {
      futureValue = futureValue * (1 + annualRate);
      
      data.push({
        year: `Year ${year}`,
        invested: lumpsum,
        wealth: Math.round(futureValue),
      });
    }

    return data;
  }, [lumpsum, expectedReturn, durationYears]);

  const finalData = projectionData[projectionData.length - 1] || { invested: 0, wealth: 0 };
  const totalGains = finalData.wealth - finalData.invested;

  return (
    <div className="lumpsum-calculator" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
      
      {/* Input Panel */}
      <div className="input-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Lumpsum Calculator</h2>
        
        <div className="input-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label style={{ fontWeight: 500, color: '#475569' }}>Total Investment</label>
            <span style={{ fontWeight: 600, color: 'var(--primary)' }}>₹{lumpsum.toLocaleString('en-IN')}</span>
          </div>
          <input 
            type="range" min="10000" max="10000000" step="10000" 
            value={lumpsum} onChange={(e) => setLumpsum(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--primary)' }} 
          />
        </div>

        <div className="input-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label style={{ fontWeight: 500, color: '#475569' }}>Expected Return (p.a)</label>
            <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{expectedReturn}%</span>
          </div>
          <input 
            type="range" min="5" max="30" step="0.5" 
            value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--primary)' }} 
          />
        </div>

        <div className="input-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label style={{ fontWeight: 500, color: '#475569' }}>Time Period</label>
            <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{durationYears} Years</span>
          </div>
          <input 
            type="range" min="1" max="40" step="1" 
            value={durationYears} onChange={(e) => setDurationYears(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--primary)' }} 
          />
        </div>
      </div>

      {/* Results & Chart Panel */}
      <div className="results-panel" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Result Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <div className="result-card" style={{ padding: '1.5rem', backgroundColor: '#f1f5f9', borderRadius: '12px' }}>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Total Invested</p>
            <h3 style={{ fontSize: '1.5rem', color: '#334155' }}>{formatCurrency(finalData.invested)}</h3>
          </div>
          <div className="result-card" style={{ padding: '1.5rem', backgroundColor: '#ecfdf5', borderRadius: '12px' }}>
            <p style={{ color: '#059669', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Est. Returns</p>
            <h3 style={{ fontSize: '1.5rem', color: '#059669' }}>{formatCurrency(totalGains)}</h3>
          </div>
          <div className="result-card" style={{ padding: '1.5rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '12px' }}>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem', opacity: 0.9 }}>Total Value</p>
            <h3 style={{ fontSize: '1.75rem' }}>{formatCurrency(finalData.wealth)}</h3>
          </div>
        </div>

        {/* Chart */}
        <div style={{ height: '350px', width: '100%', marginTop: '1rem' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={projectionData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorWealth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis 
                tickFormatter={(val) => formatCurrency(val)} 
                tick={{ fontSize: 12, fill: '#64748b' }} 
                axisLine={false} 
                tickLine={false} 
              />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <Tooltip 
                formatter={(value) => formatCurrency(value)}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="invested" name="Invested Amount" stroke="#94a3b8" strokeWidth={2} fillOpacity={1} fill="url(#colorInvested)" />
              <Area type="monotone" dataKey="wealth" name="Total Wealth" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorWealth)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .lumpsum-calculator {
            grid-template-columns: 1fr !important;
          }
          .result-card h3 {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
}
