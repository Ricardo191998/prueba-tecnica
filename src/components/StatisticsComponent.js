import React from 'react'
import "./styles/StatisticsComponent.css"

export default function StatisticsComponent() {
    return (
        <div className="s-c">
            <div className="statistics-title">
                <div className="statistics">
                    Statistics
                </div>
                <div className="input-upload">
                    <div className="icon-statistics left">
                        <i className="fas fa-download"></i>
                    </div>
                    <div className="icon-statistics">
                        <i className="fas fa-sort-down"></i>
                    </div>
                </div>
            </div>
            <div className="rectangleStatistics">
                <div className="segmentElement">
                    <StatisticElement
                        className="element-left"
                        number={50}
                        icon={"fa-bars"}
                        description={"Total proyects"}
                        color={"#0364FF"}
                    >
                    </StatisticElement>
                    <div className="separator-vertical"></div>
                    <StatisticElement
                        number={15}
                        icon={"fa-check-circle"}
                        description={"Completed"}
                        color={"#0EE881"}
                    >
                    </StatisticElement>
                </div>
                <div className="separator"></div>
                <div className="segmentElement">
                    <StatisticElement
                        number={10}
                        icon={"fa-bolt"}
                        description={"In progress"}
                        color={"#FFBE00"}
                    >
                    </StatisticElement>
                    <div style={{width:"1px"}}></div>
                    <StatisticElement
                        number={2}
                        icon={"fa-clock"}
                        description={"Delayed"}
                        color={"#FF5252"}
                    >
                    </StatisticElement>
                </div>
            </div>
        </div>
    )
}

function StatisticElement(props) {

    const {icon , number, description, color } = props

    return (
        <div >
            <div className="element-spaced">
                <i className={`fas ${icon}`} style={{ color : color, marginTop:"13px" }} ></i>
                <div className="info-element">
                    <div className="element-number">{number}</div>
                    <div className="element-description">{description}</div>
                </div>
            </div>
        </div>
    )
}
