import React, { Component } from 'react'
import './styles/AppBar.css';


export default class AppBar extends Component {

    constructor() {
        super();
        this.state = {active: false};
    }

    render() {
        return (
            <div>
                <div className="header-back">
                    <i className="back fas fa-chevron-left"></i>
                    <div className="tasks">
                        Tasks
                    </div>
                    <i className={`bell ${this.state.active ? 'fas' : 'far' } fa-bell`}
                       onClick={()=>{this.setState({
                                        active: !this.state.active
                                    });
                                }
                        }
                    ></i>
                </div>
                <div className="btn-create">
                    <p className="create">
                        CREATE +
                    </p>
                </div>
            </div>
            
        )
    }
}
