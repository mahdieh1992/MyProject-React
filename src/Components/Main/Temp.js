import './Temp.css'
import React from "react";


export default class Temp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tempColor: 'blue',
            temp: 10

        }

        this.increaseTemp = this.increaseTemp.bind(this)
        this.decreaseTemp = this.decreaseTemp.bind(this)
    }
    // increase temperate by user
    increaseTemp() {
        if (this.state.temp >= 30) {
            return false
        }
        this.setState((prevState) => {
            return { temp: prevState.temp + 1 }
        })

    }
    // decrease temperate by user
    decreaseTemp() {
        if (this.state.temp === 0) {
            return false
        }
        this.setState((prevState) => {
            return { temp: prevState.temp - 1 }
        })


    }



    render() {
        let massage = null
        if (this.state.temp > 0 && this.state.temp <= 15) {
            massage = <h6>This is cold</h6>
        }
        else {
            massage = <h6>This is hot</h6>
        }
        return (

            < div className="Temp">
                <div className={`Temp__Show  ${this.state.temp > 15 ? 'temp__show--red' : 'temp__show--blue'}`}>
                    <span className='Temp__Number'>{this.state.temp}C</span>
                </div>
                <button onClick={this.increaseTemp} className="Temp__Plus">+</button>
                <button onClick={this.decreaseTemp} className="Temp__Mines">-</button>
                {massage}

            </div>
        )
    }

}