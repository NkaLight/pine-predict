import { useState } from "react";
import MastHeadImg from "../icons/Masthead.png"
import Dashboard from "../Component/Dashboard/Dashboard";
import BarChart from "../icons/Bar chart-2.svg"
import CameraIcon from "../icons/Camera.svg"
import Map from "../icons/Map.svg"
import InteractiveMap from "../Component/InteractiveMap";
import saplingData from "../data/Wilding_Conifer_Survey_Areas_1998-2003.geojson"
import "../App.css"

function Landing(){
    const [activeComponent, setActiveComponent] = useState("map");
    return(
        <>
        <header>
            <masthead className="masthead-section">
                <div className="masthead-txt">Invasive Pine Species Tracker</div>
                <img src={MastHeadImg} alt="Masthead icon" srcset="" className="masthead-image" />
            </masthead>
        </header>
      {/* Top-level Nav */}
      <div className="landing-nav">
        <div className={activeComponent === "dashboard" ? "landing-nav-item-active":"landing-nav-item-none"}>
            <img src={BarChart} alt="" srcset="" />
            <button onClick={() => setActiveComponent("dashboard")} className="nav-btn">Dashboard</button>
        </div>
        <div className={activeComponent === "map" ? "landing-nav-item-active":"landing-nav-item-none"}>
            <img src={Map} alt="" srcset="" />
            <button onClick={() => setActiveComponent("map")} className="nav-btn">Interactive Map</button>
        </div>
        <div className={activeComponent === "upload" ? "landing-nav-item-active":"landing-nav-item-none"}>
            <img src={CameraIcon} alt="" srcset="" />
            <button onClick={() => setActiveComponent("upload")} className="nav-btn">Upload Image</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-section">
                {activeComponent === "dashboard" && <Dashboard />}
        <div
            style={{
            visibility: activeComponent === "map" ? "visible" : "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            }}
        >
            <InteractiveMap geojsonData={saplingData}/>
        </div>
        {/* {activeComponent === "upload" && <UploadImage />} */}
      </div>
    </>
    )
}
export default Landing;
