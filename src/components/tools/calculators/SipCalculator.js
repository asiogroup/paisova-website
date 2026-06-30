"use client";

import { useState, useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Helper function to format numbers as Indian currency
const formatCurrency = (value) => {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)} Cr`;
  } else if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)} L`;
  } else {
    return `₹${value.toLocaleString('en-IN')}`;
  }
};

export default function SipCalculator() {
  const [monthlySip, setMonthlySip] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [durationYears, setDurationYears] = useState(10);
  const [stepUp, setStepUp] = useState(10);

  // Calculate SIP Projection
  const projectionData = useMemo(() => {
    let currentSip = monthlySip;
    let totalInvested = 0;
    let futureValue = 0;
    const data = [];
    const monthlyRate = expectedReturn / 12 / 100;

    for (let year = 1; year <= durationYears; year++) {
      for (let month = 1; month <= 12; month++) {
        totalInvested += currentSip;
        futureValue = (futureValue + currentSip) * (1 + monthlyRate);
      }
      
      data.push({
        year: `Year ${year}`,
        invested: Math.round(totalInvested),
        wealth: Math.round(futureValue),
      });

      // Apply step up at the end of the year
      currentSip = currentSip * (1 + stepUp / 100);
    }

    return data;
  }, [monthlySip, expectedReturn, durationYears, stepUp]);

  const finalData = projectionData[projectionData.length - 1] || { invested: 0, wealth: 0 };
  const totalGains = finalData.wealth - finalData.invested;

  return (
    <div className="sip-calculator" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
      
      {/* Input Panel */}
      <div className="input-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>SIP Calculator</h2>
        
        <div className="input-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label style={{ fontWeight: 500, color: '#475569' }}>Monthly Investment</label>
            <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>₹{monthlySip.toLocaleString('en-IN')}</span>
          </div>
          <input 
            type="range" min="500" max="100000" step="500" 
            value={monthlySip} onChange={(e) => setMonthlySip(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--primary-color)' }} 
          />
        </div>

        <div className="input-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label style={{ fontWeight: 500, color: '#475569' }}>Expected Return (p.a)</label>
            <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{expectedReturn}%</span>
          </div>
          <input 
            type="range" min="5" max="30" step="0.5" 
            value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--primary-color)' }} 
          />
        </div>

        <div className="input-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label style={{ fontWeight: 500, color: '#475569' }}>Time Period</label>
            <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{durationYears} Years</span>
          </div>
          <input 
            type="range" min="1" max="40" step="1" 
            value={durationYears} onChange={(e) => setDurationYears(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--primary-color)' }} 
          />
        </div>

        <div className="input-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label style={{ fontWeight: 500, color: '#475569' }}>Annual Step-Up</label>
            <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{stepUp}%</span>
          </div>
          <input 
            type="range" min="0" max="25" step="1" 
            value={stepUp} onChange={(e) => setStepUp(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--primary-color)' }} 
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
          <div className="result-card" style={{ padding: '1.5rem', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '12px' }}>
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
                  <stop offset="5%" stopColor="var(--primary-color)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--primary-color)" stopOpacity={0}/>
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
              <Area type="monotone" dataKey="wealth" name="Total Wealth" stroke="var(--primary-color)" strokeWidth={3} fillOpacity={1} fill="url(#colorWealth)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Insights */}
        <div className="insights-panel" style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '8px', borderLeft: '4px solid #f59e0b', color: '#92400e', fontSize: '0.9rem' }}>
          💡 <strong>Insight:</strong> By stepping up your SIP by {stepUp}% annually, you invest {formatCurrency(finalData.invested)} over {durationYears} years, generating a profit of {formatCurrency(totalGains)}!
        </div>

      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .sip-calculator {
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
