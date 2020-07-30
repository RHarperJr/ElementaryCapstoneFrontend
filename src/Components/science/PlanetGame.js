import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Mercury from "../../images/Mercury.png"
import Venus from "../../images/Venus.png"
import Earth from "../../images/Earth.png"
import Mars from "../../images/Mars.png"
import Jupiter from "../../images/Jupiter.png"
import Saturn from "../../images/Saturn.png"
import Uranus from "../../images/Uranus.png"
import Neptune from "../../images/Neptune.png"



class PlanetGame extends Component {

    state = {
        merc: false, venus: false, earth: false, mars: false,
        jup: false, sat: false, uran: false, nept: false,
        targetplanet: "",
        info: 0,
        start: false
    }

    setTarget = () => {
        var target = Math.floor(Math.random() * 8) + 1;
        if(target === 1) {
            this.setState({merc: true, targetplanet: "Mercury"});
        }
        else if(target === 2) {
            this.setState({venus: true, targetplanet: "Venus"});
        }
        else if(target === 3) {
            this.setState({earth: true, targetplanet: "Earth"});
        }
        else if(target === 4) {
            this.setState({mars: true, targetplanet: "Mars"});
        }
        else if(target === 5) {
            this.setState({jup: true, targetplanet: "Jupiter"});
        }
        else if(target === 6) {
            this.setState({sat: true, targetplanet: "Saturn"});
        }
        else if(target === 7) {
            this.setState({uran: true, targetplanet: "Uranus"});
        }
        else if(target === 8) {
            this.setState({nept: true, targetplanet: "Neptune"});
        }
    }

    setStart = () => {
        this.setState({start: true});
        this.setTarget();
    }

    displayInfo = () => {
        console.log("Correct")
        if (this.state.info === 0) {
            this.setState({
                info: 1
            })
        } else {
            this.setState({
                info: 0
            })
        }
    }

    tryAgain = () => {

    }

    render () {
        return (<div>
            <div>
                
                <h1 className="titles">Our Solar System</h1>
                <p className="start" >{this.state.start ? "" : <Button variant="contained" onClick={this.setStart}>Start</Button>}</p>
                {this.state.start ? <h3 className="titles">Select {this.state.targetplanet}</h3> : ""}
            </div>
            <div align="center">
                <img className="planets" alt="" src={Mercury} onClick={this.state.merc ? this.displayInfo : this.tryAgain()}/> &nbsp;
                <img className="planets" alt="" src={Venus} onClick={this.state.venus ? this.displayInfo : this.tryAgain()}/> &nbsp;
                <img className="planets" alt="" src={Earth} onClick={this.state.earth ? this.displayInfo : this.tryAgain()}/> &nbsp;
                <img className="planets" alt="" src={Mars} onClick={this.state.mars ? this.displayInfo : this.tryAgain()}/>
            </div>
            <div align="center">
                <img className="planets" alt=""  src={Jupiter} onClick={this.state.jup ? this.displayInfo : this.tryAgain()}/> &nbsp;
                <img alt="" src={Saturn} width="300" height="200" onClick={this.state.sat ? this.displayInfo : this.tryAgain()}/> &nbsp;
                <img alt="" src={Uranus} width="300" height="200" onClick={this.state.uran ? this.displayInfo : this.tryAgain()}/> &nbsp;
                <img className="planets" alt="" src={Neptune} onClick={this.state.nept ? this.displayInfo : this.tryAgain()}/>
            </div>

        </div>)
    }
}


export default PlanetGame;