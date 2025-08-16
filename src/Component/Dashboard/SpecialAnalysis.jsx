import React from "react";
import Card1 from "../../icons/cardIcon1.svg"
import Card2 from "../../icons/cardIcon2.svg"
import Card3 from "../../icons/CardIcon3.svg"
import Card4 from "../../icons/CardIcon4.svg"

export default function SpecialAnalysis(){
    return(
        <div className="report-cards-section">
                <div className="card-item">
                    <img src={Card1} alt="" srcset="" />
                    <div>
                        <div className="num-val">1005</div>
                        <div className="text-val">Total Saplings</div>
                    </div>
                </div>
                <div className="card-item">
                    <img src={Card2} alt="" srcset=""/>
                    <div>
                        <div className="num-val">857</div>
                        <div className="text-val">Verified</div>
                    </div>
                </div>
                <div className="card-item">
                    <img src={Card3} alt="" srcset="" />
                    <div>
                        <div className="num-val">547</div>
                        <div className="text-val">Contributors</div>
                    </div>
                </div>
                <div className="card-item">
                    <img src={Card4} alt="" srcset="" />
                    <div>
                        <div className="num-val">2</div>
                        <div className="text-val">High Threats Areas</div>
                    </div>
                </div>
                <div>
                    <div className="analysis-section">
                        <div>

                        </div>
                    </div>
                </div>
            </div>
    )
}