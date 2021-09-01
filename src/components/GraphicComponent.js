import React, {useState} from 'react'
import { Line } from 'react-chartjs-2';

import "./styles/GraphicComponent.css"


const initData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: '#FFBE00',
        borderColor: '#FFBE00',
      },
    ],
};

export default function GraphicComponent () {

    let [active , setActive] = useState("Day");
    let [data, setData] = useState(initData);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const menu = ["Day", "Week","Month", "Year"];
    const years = [1998, 1999, 2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010];
    const months = ["Jan", "Feb", "Mar","Apr","May", "Jun", "Jul", "Ago","Sep","Oct", "Nov", "Dec"];
    const days = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ,21, 22, 23 ,24,25, 26, 27,28,29,30];
    const week = ["1rst", "2nd", "3rd", "4th"];

    function handleAction(event){
         setActive(event)
         switch (event){
            case 'Day':
                setData({
                    ...data,
                    labels: days.slice(2, 8),
                    datasets: [
                        {
                            ...data.datasets[0],
                            data: [100,200,300,4,20, 300]
                        }
                    ]
                });
                break; 
            case 'Week':
                setData({
                    ...data,
                    labels: week,
                    datasets: [
                        {
                            ...data.datasets[0],
                            data: [400,100,30,4]
                        }
                    ]
                });
                break; 
            case 'Month':
                setData({
                    ...data,
                    labels: months.slice(2, 8),
                    datasets: [
                        {
                            ...data.datasets[0],
                            data: [200,200,30,40,20, 500]
                        }
                    ]
                });
                break; 
            case 'Year':
                setData({
                    ...data,
                    labels: years.slice(2,8),
                    datasets: [
                        {
                            ...data.datasets[0],
                            data: [300,100,320,490,2, 500]
                        }
                    ]
                });
                break; 
            default: 
                break;
         }
    }
    const options = {
        scales: {
            yAxes: [
            {
                ticks: {
                beginAtZero: true,
                },
            },
            ],
        },	
        elements: {
            line: {
                tension: 0.5 // disables bezier curves
            },
        },
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: "#FFFFFF"
                }
            },
            title: {
                display: false,
                text: 'Custom Chart Title'
            }
        }
    };
 

    return (
        <div className="g-c">
            <div className="graphic-container">
                <div className="graphic-navigation">
                    {   
                        menu.map((item) => 
                            <div key={item} className={`normalElement ${ active === item ? "active" : ""}`}
                                onClick={()=>{handleAction(item)}}>
                                {item}
                            </div>
                        )
                    }
                </div>
                <div className="info-graphics">
                    <div className="price">$ </div>
                    <div className="price-info"> {data.datasets[0].data.reduce(reducer)} </div>
                </div>
                <Line data={data} options={options} />
            </div>
        </div>
    )
}
