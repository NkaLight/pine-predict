import react from "react";
import MastHeadImg from "../icons/Masthead.png"
import "../App.css"

function Landing(){
    return(
        <header>
            <masthead>
                <div className="masthead-txt"></div>
                <img src={MastHeadImg} alt="Masthead icon" srcset="" className="masthead-image" />
            </masthead>
        </header>
    )
}

export default Landing