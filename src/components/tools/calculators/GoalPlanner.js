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

export default function GoalPlanner() {
  const [targetGoal, setTargetGoal] = useState(5000000); // 50L
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [durationYears, setDurationYears] = useState(15);
  const [inflation, setInflation] = useState(6);

  // Calculate required SIP
  const calculations = useMemo(() => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = durationYears * 12;
    
    // Future value of goal adjusted for inflation
    const inflationAdjustedGoal = targetGoal * Math.pow(1 + inflation / 100, durationYears);
    
    // Required SIP formula: P = (FV * r) / (((1 + r)^n - 1) * (1 + r))
    const requiredSip = (inflationAdjustedGoal * monthlyRate) / ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate));
    
    const requiredLumpsum = inflationAdjustedGoal / Math.pow(1 + expectedReturn / 100, durationYears);

    const data = [];
    let currentWealth = 0;
    let currentInvested = 0;

    for (let year = 1; year <= durationYears; year++) {
      for (let month = 1; month <= 12; month++) {
        currentInvested += requiredSip;
        currentWealth = (currentWealth + requiredSip) * (1 + monthlyRate);
      }
      
      data.push({
        year: `Year ${year}`,
        invested: Math.round(currentInvested),
        wealth: Math.round(currentWealth),
        target: Math.round(inflationAdjustedGoal)
      });
    }

    return {
      inflationAdjustedGoal,
      requiredSip,
      requiredLumpsum,
      totalInvested: currentInvested,
      data
    };
  }, [targetGoal, expectedReturn, durationYears, inflation]);

  return (
    <div className="goal-planner" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
      
      {/* Input Panel */}
      <div className="input-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Goal Planner</h2>
        
        <div className="input-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label style={{ fontWeight: 500, color: '#475569' }}>Goal Amount (Today's Value)</label>
            <span style={{ fontWeight: 600, color: 'var(--primary)' }}>₹{targetGoal.toLocaleString('en-IN')}</span>
          </div>
          <input 
            type="range" min="100000" max="50000000" step="100000" 
            value={targetGoal} onChange={(e) => setTargetGoal(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--primary)' }} 
          />
        </div>

        <div className="input-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label style={{ fontWeight: 500, color: '#475569' }}>Time to Goal</label>
            <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{durationYears} Years</span>
          </div>
          <input 
            type="range" min="1" max="40" step="1" 
            value={durationYears} onChange={(e) => setDurationYears(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--primary)' }} 
          />
        </div>

        <div className="input-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label style={{ fontWeight: 500, color: '#475569' }}>Expected Return</label>
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
            <label style={{ fontWeight: 500, color: '#475569' }}>Expected Inflation</label>
            <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{inflation}%</span>
          </div>
          <input 
            type="range" min="0" max="15" step="0.5" 
            value={inflation} onChange={(e) => setInflation(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--primary)' }} 
          />
        </div>
      </div>

      {/* Results & Chart Panel */}
      <div className="results-panel" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Result Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          <div className="result-card" style={{ padding: '1.5rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '12px' }}>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem', opacity: 0.9 }}>Required Monthly SIP</p>
            <h3 style={{ fontSize: '1.75rem' }}>{formatCurrency(Math.round(calculations.requiredSip))}</h3>
          </div>
          <div className="result-card" style={{ padding: '1.5rem', backgroundColor: '#f1f5f9', borderRadius: '12px' }}>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>OR Required Lumpsum</p>
            <h3 style={{ fontSize: '1.5rem', color: '#334155' }}>{formatCurrency(Math.round(calculations.requiredLumpsum))}</h3>
          </div>
        </div>
        
        <div style={{ padding: '1rem', backgroundColor: '#fef2f2', borderRadius: '8px', borderLeft: '4px solid #ef4444', color: '#991b1b', fontSize: '0.9rem' }}>
          ⚠️ Due to {inflation}% inflation, your goal of {formatCurrency(targetGoal)} today will cost <strong>{formatCurrency(Math.round(calculations.inflationAdjustedGoal))}</strong> in {durationYears} years.
        </div>

        {/* Chart */}
        <div style={{ height: '300px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={calculations.data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorWealthGoal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
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
              <Area type="monotone" dataKey="wealth" name="Accumulated Wealth" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorWealthGoal)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .goal-planner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
