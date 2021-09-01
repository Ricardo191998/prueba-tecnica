import React, {useState} from 'react'
import "./styles/UpComingTaskComponent.css"

const initOrders = [
    {
        orderNum: "890PO90",
        name : "Bryan Williams",
        progress: 20,
        days: 1
    },
    {
        orderNum: "890PO91",
        name : "Marcus Klaus",
        progress: 70,
        days: 3
    },
    {
        orderNum: "890PO92",
        name : "Marcus Klaus",
        progress: 50,
        days: 3
    }
]

export default function UpComingTaskComponent() {
    

    let [orders, setOrders] = useState(initOrders);
    
    return (
        <div>
            <div>
                <p className="title">Upcoming Task <span className="num-orders">{orders.length}</span></p> 
            </div>
            <div className="up-coming-task">
                {   
                    orders.map((order) => 
                        <div className="rectangle-2" key={order.orderNum}>
                            <div className="order-number">Order #{order.orderNum}</div>
                            <div className="name">{order.name}</div>
                            <div className="porcent-div">
                                <div className="name">Progress</div>
                                <div className="porcent">{order.progress}%</div>
                            </div>
                            <div className="line">
                                <div className="progress-line " style={{width: ((order.progress*136)/100) +'px'}}></div>
                            </div>
                            <div className="day-left">{order.days} {order.days>1 ? 'days': 'day'} left </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
