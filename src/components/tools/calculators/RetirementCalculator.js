"use client";

import { useState, useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const formatCurrency = (value) => {
  if (!isFinite(value)) return "₹0";
  const v = Math.max(0, Math.round(value));
  if (v >= 10000000) return `₹${(v / 10000000).toFixed(2)} Cr`;
  if (v >= 100000) return `₹${(v / 100000).toFixed(2)} L`;
  return `₹${v.toLocaleString("en-IN")}`;
};

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(40000);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [inflation, setInflation] = useState(6);
  const [preReturn, setPreReturn] = useState(12);
  const [postReturn, setPostReturn] = useState(8);

  const result = useMemo(() => {
    const yearsToRetire = Math.max(retirementAge - currentAge, 0);
    const yearsInRetirement = Math.max(lifeExpectancy - retirementAge, 1);
    const infl = inflation / 100;
    const preR = preReturn / 100;
    const postR = postReturn / 100;

    // Monthly expense at the point of retirement (inflation-adjusted)
    const monthlyExpenseAtRetire = monthlyExpense * Math.pow(1 + infl, yearsToRetire);
    const annualExpenseAtRetire = monthlyExpenseAtRetire * 12;

    // Corpus required: PV of inflation-growing withdrawals during retirement,
    // with the remaining corpus earning the post-retirement return.
    const x = (1 + infl) / (1 + postR);
    let corpusRequired;
    if (Math.abs(x - 1) < 1e-9) {
      corpusRequired = annualExpenseAtRetire * yearsInRetirement;
    } else {
      corpusRequired = annualExpenseAtRetire * (1 - Math.pow(x, yearsInRetirement)) / (1 - x);
    }

    // Monthly SIP required during accumulation (contributions at start of month)
    const m = preR / 12;
    const N = yearsToRetire * 12;
    let monthlySip = 0;
    if (N > 0 && m > 0) {
      const factor = ((Math.pow(1 + m, N) - 1) / m) * (1 + m);
      monthlySip = factor > 0 ? corpusRequired / factor : 0;
    }

    // Chart: projected corpus accumulation year by year
    const data = [];
    let fv = 0;
    for (let year = 1; year <= yearsToRetire; year++) {
      for (let mo = 1; mo <= 12; mo++) fv = (fv + monthlySip) * (1 + m);
      data.push({ age: `Age ${currentAge + year}`, corpus: Math.round(fv) });
    }

    return { monthlyExpenseAtRetire, corpusRequired, monthlySip, data, yearsToRetire, yearsInRetirement };
  }, [currentAge, retirementAge, monthlyExpense, lifeExpectancy, inflation, preReturn, postReturn]);

  return (
    <div className="retire-calculator" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem" }}>
      {/* Input Panel */}
      <div className="input-panel" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>Retirement Planner</h2>

        {[
          { label: "Current Age", value: `${currentAge} yrs`, set: setCurrentAge, v: currentAge, min: 18, max: 60, step: 1 },
          { label: "Retirement Age", value: `${retirementAge} yrs`, set: setRetirementAge, v: retirementAge, min: currentAge + 1, max: 75, step: 1 },
          { label: "Monthly Expenses (today)", value: `₹${monthlyExpense.toLocaleString("en-IN")}`, set: setMonthlyExpense, v: monthlyExpense, min: 10000, max: 500000, step: 5000 },
          { label: "Life Expectancy", value: `${lifeExpectancy} yrs`, set: setLifeExpectancy, v: lifeExpectancy, min: 70, max: 100, step: 1 },
          { label: "Inflation Rate", value: `${inflation}%`, set: setInflation, v: inflation, min: 3, max: 10, step: 0.5 },
          { label: "Return before retirement", value: `${preReturn}%`, set: setPreReturn, v: preReturn, min: 6, max: 18, step: 0.5 },
          { label: "Return after retirement", value: `${postReturn}%`, set: setPostReturn, v: postReturn, min: 4, max: 12, step: 0.5 },
        ].map((f) => (
          <div className="input-group" key={f.label}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
              <label style={{ fontWeight: 500, color: "#475569" }}>{f.label}</label>
              <span style={{ fontWeight: 600, color: "var(--primary)" }}>{f.value}</span>
            </div>
            <input
              type="range" min={f.min} max={f.max} step={f.step}
              value={f.v} onChange={(e) => f.set(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--primary)" }}
            />
          </div>
        ))}
      </div>

      {/* Results & Chart Panel */}
      <div className="results-panel" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          <div className="result-card" style={{ padding: "1.5rem", backgroundColor: "#f1f5f9", borderRadius: "12px" }}>
            <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "0.5rem" }}>Monthly expense at {retirementAge}</p>
            <h3 style={{ fontSize: "1.4rem", color: "#334155" }}>{formatCurrency(result.monthlyExpenseAtRetire)}</h3>
          </div>
          <div className="result-card" style={{ padding: "1.5rem", backgroundColor: "#ecfdf5", borderRadius: "12px" }}>
            <p style={{ color: "#059669", fontSize: "0.875rem", marginBottom: "0.5rem" }}>Corpus needed</p>
            <h3 style={{ fontSize: "1.4rem", color: "#059669" }}>{formatCurrency(result.corpusRequired)}</h3>
          </div>
          <div className="result-card" style={{ padding: "1.5rem", backgroundColor: "var(--primary)", color: "white", borderRadius: "12px" }}>
            <p style={{ color: "#e2e8f0", fontSize: "0.875rem", marginBottom: "0.25rem" }}>Invest every month</p>
            <h2 style={{ fontSize: "1.9rem", margin: "0.25rem 0", color: "white" }}>{formatCurrency(result.monthlySip)}</h2>
          </div>
        </div>

        <div style={{ height: "340px", width: "100%" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={result.data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCorpus" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="age" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} interval="preserveStartEnd" />
              <YAxis tickFormatter={(val) => formatCurrency(val)} tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} width={70} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <Tooltip formatter={(value) => formatCurrency(value)} contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }} />
              <Area type="monotone" dataKey="corpus" name="Projected Corpus" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorCorpus)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="insights-panel" style={{ padding: "1rem", backgroundColor: "#fef3c7", borderRadius: "8px", borderLeft: "4px solid #f59e0b", color: "#92400e", fontSize: "0.9rem" }}>
          💡 <strong>Insight:</strong> To retire at {retirementAge} and fund roughly {result.yearsInRetirement} years of retirement at today's lifestyle, you'll need about <strong>{formatCurrency(result.corpusRequired)}</strong>. Starting today, investing about <strong>{formatCurrency(result.monthlySip)}/month</strong> could get you there — assuming {preReturn}% returns while working and {postReturn}% after retirement, with {inflation}% inflation.
        </div>

        <p style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
          Illustrative estimate only. Actual returns and inflation vary and are not guaranteed.
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .retire-calculator { grid-template-columns: 1fr !important; }
          .result-card h3 { font-size: 1.15rem !important; }
        }
      `}</style>
    </div>
  );
}
