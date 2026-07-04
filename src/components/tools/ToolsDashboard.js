"use client";

import { useState } from "react";
import SipCalculator from "./calculators/SipCalculator";
import LumpsumCalculator from "./calculators/LumpsumCalculator";
import GoalPlanner from "./calculators/GoalPlanner";
import RetirementCalculator from "./calculators/RetirementCalculator";
import CagrCalculator from "./calculators/CagrCalculator";

const tools = [
  { id: "sip", label: "SIP Calculator", component: SipCalculator },
  { id: "lumpsum", label: "Lumpsum Calculator", component: LumpsumCalculator },
  { id: "goal", label: "Goal Planner", component: GoalPlanner },
  { id: "retirement", label: "Retirement", component: RetirementCalculator },
  { id: "cagr", label: "CAGR", component: CagrCalculator },
];

export default function ToolsDashboard() {
  const [activeTool, setActiveTool] = useState(tools[0].id);

  const ActiveComponent = tools.find((t) => t.id === activeTool)?.component || SipCalculator;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div className="tools-nav">
        {tools.map((tool) => (
          <button
            key={tool.id}
            className={activeTool === tool.id ? 'active' : ''}
            onClick={() => setActiveTool(tool.id)}
          >
            {tool.label}
          </button>
        ))}
      </div>

      <div className="tool-content">
        <ActiveComponent />
      </div>
    </div>
  );
}
