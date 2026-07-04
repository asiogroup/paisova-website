"use client";

import { useState, useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const formatCurrency = (value) => {
  if (!isFinite(value)) return "₹0";
  const v = Math.round(value);
  const abs = Math.abs(v);
  const sign = v < 0 ? "-" : "";
  if (abs >= 10000000) return `${sign}₹${(abs / 10000000).toFixed(2)} Cr`;
  if (abs >= 100000) return `${sign}₹${(abs / 100000).toFixed(2)} L`;
  return `${sign}₹${abs.toLocaleString("en-IN")}`;
};

const inputStyle = {
  padding: "0.75rem 0.9rem",
  borderRadius: "10px",
  border: "1px solid var(--border-light)",
  fontFamily: "inherit",
  fontSize: "1rem",
  width: "100%",
};

export default function CagrCalculator() {
  const [initialValue, setInitialValue] = useState(100000);
  const [finalValue, setFinalValue] = useState(250000);
  const [years, setYears] = useState(5);

  const result = useMemo(() => {
    const valid = initialValue > 0 && years > 0;
    const cagr = valid ? (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100 : 0;
    const absReturn = initialValue > 0 ? ((finalValue - initialValue) / initialValue) * 100 : 0;
    const totalGain = finalValue - initialValue;

    const data = [];
    for (let y = 0; y <= years; y++) {
      data.push({ year: `Yr ${y}`, value: Math.round(initialValue * Math.pow(1 + cagr / 100, y)) });
    }
    return { cagr, absReturn, totalGain, data };
  }, [initialValue, finalValue, years]);

  return (
    <div className="cagr-calculator" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem" }}>
      {/* Input Panel */}
      <div className="input-panel" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>CAGR Calculator</h2>
        <p style={{ color: "#64748b", fontSize: "0.9rem", marginTop: "-0.75rem" }}>
          Find the annualised growth rate of an investment between two values.
        </p>

        <div className="input-group">
          <label style={{ fontWeight: 500, color: "#475569", display: "block", marginBottom: "0.5rem" }}>Initial Investment (₹)</label>
          <input type="number" min="0" step="1000" value={initialValue}
            onChange={(e) => setInitialValue(Math.max(0, Number(e.target.value)))} style={inputStyle} />
        </div>

        <div className="input-group">
          <label style={{ fontWeight: 500, color: "#475569", display: "block", marginBottom: "0.5rem" }}>Final Value (₹)</label>
          <input type="number" min="0" step="1000" value={finalValue}
            onChange={(e) => setFinalValue(Math.max(0, Number(e.target.value)))} style={inputStyle} />
        </div>

        <div className="input-group">
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <label style={{ fontWeight: 500, color: "#475569" }}>Duration</label>
            <span style={{ fontWeight: 600, color: "var(--primary)" }}>{years} {years === 1 ? "Year" : "Years"}</span>
          </div>
          <input type="range" min="1" max="40" step="1" value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            style={{ width: "100%", accentColor: "var(--primary)" }} />
        </div>
      </div>

      {/* Results & Chart Panel */}
      <div className="results-panel" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          <div className="result-card" style={{ padding: "1.5rem", backgroundColor: "#f1f5f9", borderRadius: "12px" }}>
            <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "0.5rem" }}>Absolute Return</p>
            <h3 style={{ fontSize: "1.5rem", color: "#334155" }}>{result.absReturn.toFixed(1)}%</h3>
          </div>
          <div className="result-card" style={{ padding: "1.5rem", backgroundColor: "#ecfdf5", borderRadius: "12px" }}>
            <p style={{ color: "#059669", fontSize: "0.875rem", marginBottom: "0.5rem" }}>Total Gain</p>
            <h3 style={{ fontSize: "1.5rem", color: "#059669" }}>{formatCurrency(result.totalGain)}</h3>
          </div>
          <div className="result-card" style={{ padding: "1.5rem", backgroundColor: "var(--primary)", color: "white", borderRadius: "12px" }}>
            <p style={{ color: "#e2e8f0", fontSize: "0.875rem", marginBottom: "0.25rem" }}>CAGR</p>
            <h2 style={{ fontSize: "2rem", margin: "0.25rem 0", color: "white" }}>{result.cagr.toFixed(2)}%</h2>
          </div>
        </div>

        <div style={{ height: "340px", width: "100%" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={result.data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCagr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={(val) => formatCurrency(val)} tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} width={70} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <Tooltip formatter={(value) => formatCurrency(value)} contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }} />
              <Area type="monotone" dataKey="value" name="Value at CAGR" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorCagr)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="insights-panel" style={{ padding: "1rem", backgroundColor: "#fef3c7", borderRadius: "8px", borderLeft: "4px solid #f59e0b", color: "#92400e", fontSize: "0.9rem" }}>
          💡 <strong>Insight:</strong> Growing from {formatCurrency(initialValue)} to {formatCurrency(finalValue)} over {years} {years === 1 ? "year" : "years"} is a <strong>{result.cagr.toFixed(2)}% CAGR</strong> — the steady annual rate that would produce the same result. Note that CAGR smooths over the ups and downs of individual years.
        </div>

        <p style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
          CAGR reflects past growth between two values; it is not a prediction of future returns.
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .cagr-calculator { grid-template-columns: 1fr !important; }
          .result-card h3 { font-size: 1.25rem !important; }
        }
      `}</style>
    </div>
  );
}
