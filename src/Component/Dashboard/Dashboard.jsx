import { useState } from "react";
import SpecialAnalysis from "./SpecialAnalysis";
import Trends from "./Trends";
import RegionalData from "./RegionalData";
import "../../App.css"


export default function Dashboard() {
  const [subView, setSubView] = useState("analysis");

  return (
    <div>
      {/* Dashboard Sub Nav */}
      <div className="dashboard-nav">
        <button onClick={() => setSubView("analysis")} className={subView === "analysis" ? "dashboard-nav-active": "dashboard-nav-none"}>Special Analysis</button>
        <button onClick={() => setSubView("trends")} className={subView === "trends" ? "dashboard-nav-active": "dashboard-nav-none"}>Trends</button>
        <button onClick={() => setSubView("regional")} className={subView === "regional" ? "dashboard-nav-active": "dashboard-nav-none"}>Regional Data</button>
      </div>

      {/* Subcontent */}
      <div className="border rounded-lg p-6 shadow">
        {!subView && <p>Select a Dashboard view above.</p>}
        {subView === "analysis" && <SpecialAnalysis />}
        {/* {subView === "trends" && <Trends />}
        {subView === "regional" && <RegionalData />} */}
      </div>
    </div>
  );
}
