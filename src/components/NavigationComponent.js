import React, {useState} from 'react';
import "./styles/NavigationComponent.css";

export default function NavigationComponent() {

   let [active , setActive] = useState('all');

   function handleAction(event){
        setActive(event)
   }

    return (
        <div className="navigation">
            <div className={`normalLink ${active === 'all' ? "active" : ""}`}
                onClick={()=>{handleAction('all')}}>
                All
            </div>
            <div className={`normalLink ${active === 'in-progress' ? "active" : ""}`}
                onClick={()=>{handleAction('in-progress')}}>
                In progress
            </div>
            <div className={`normalLink ${active === 'started' ? "active" : ""}`}
                onClick={()=>{handleAction('started')}}>
                Started
            </div>
            <div className={`normalLink ${active === 'completed' ? "active" : ""}`}
                onClick={()=>{handleAction('completed')}}>
                Completed
            </div>
        </div>
    )
    
}


