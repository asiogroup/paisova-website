"use client";

import { useState } from "react";
import SipCalculator from "./calculators/SipCalculator";
import LumpsumCalculator from "./calculators/LumpsumCalculator";
import GoalPlanner from "./calculators/GoalPlanner";

const tools = [
  { id: "sip", label: "SIP Calculator", component: SipCalculator },
  { id: "lumpsum", label: "Lumpsum Calculator", component: LumpsumCalculator },
  { id: "goal", label: "Goal Planner", component: GoalPlanner },
  { id: "retirement", label: "Retirement", component: () => <div>Retirement Planner Coming Soon</div> },
  { id: "cagr", label: "CAGR", component: () => <div>CAGR Calculator Coming Soon</div> },
];

export default function ToolsDashboard() {
  const [activeTool, setActiveTool] = useState(tools[0].id);

  const ActiveComponent = tools.find((t) => t.id === activeTool)?.component || SipCalculator;

  return (
    <div className="tools-dashboard" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Navigation Pills */}
      <div 
        className="tools-nav" 
        style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: '0.75rem', 
          padding: '1rem', 
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: '20px',
          zIndex: 100,
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none',  // IE and Edge
        }}
      >
        <style jsx>{`
          .tools-nav::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              border: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
              backgroundColor: activeTool === tool.id ? 'var(--primary-color)' : '#f1f5f9',
              color: activeTool === tool.id ? 'white' : '#475569',
              boxShadow: activeTool === tool.id ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
            }}
          >
            {tool.label}
          </button>
        ))}
      </div>

      {/* Tool Content Area */}
      <div className="tool-content" style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', padding: '2rem' }}>
        <ActiveComponent />
      </div>
      
    </div>
  );
}
