import React, { Component } from 'react'
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
        info: 0
    }

    stateUpdateHelper = (planet) => {
        const planetMap = {
            merc: "Mercury",
            venus: "Venus",
            earth: "Earth",
            mars: "Mars",
            jup: "Jupiter",
            sat: "Saturn",
            uran: "Uranus",
            nept: "Neptune"
        }
        this.setState({planet: true, targetplanet: planetMap[planet]});
    }

    setTarget = () => {
        var target = Math.floor(Math.random() * 8) + 1;
        if(target == 1) {
            this.stateUpdateHelper("merc");
        }
        else if(target == 2) {
            this.stateUpdateHelper("venus");//this.setState({venus: true, targetplanet: "Venus"});
        }
        else if(target == 3) {
            this.stateUpdateHelper("earth");//this.setState({earth: true, targetplanet: "Earth"});
        }
        else if(target == 4) {
            this.stateUpdateHelper("mars");//this.setState({mars: true, targetplanet: "Mars"});
        }
        else if(target == 5) {
            this.stateUpdateHelper("jup");//this.setState({jup: true, targetplanet: "Jupiter"});
        }
        else if(target == 6) {
            this.stateUpdateHelper("sat");//this.setState({sat: true, targetplanet: "Saturn"});
        }
        else if(target == 7) {
            this.stateUpdateHelper("uran");//this.setState({uran: true, targetplanet: "Uranus"});
        }
        else if(target == 8) {
            this.stateUpdateHelper("nept");//this.setState({nept: true, targetplanet: "Neptune"});
        }
    }

    displayInfo = () => {
        {
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
    }

    tryAgain = () => {

    }

    render () {
        return (<div>
            <div>
                {this.setTarget}
                <h1 className="titles">Our Solar System</h1>
                <p><h3 className="titles">Select {this.state.targetplanet}</h3></p>
            </div>
            <div>
                <img className="planets" src={Mercury} onClick={this.state.merc ? this.displayInfo : this.tryAgain()}/> &nbsp;
                <img className="planets" src={Venus} onClick={this.state.venus ? this.displayInfo : this.tryAgain()}/> &nbsp;
                <img className="planets" src={Earth} onClick={this.state.earth ? this.displayInfo : this.tryAgain()}/> &nbsp;
                <img className="planets" src={Mars} onClick={this.state.mars ? this.displayInfo : this.tryAgain()}/>
            </div>
            <div>
                <img className="planets" src={Jupiter} onClick={this.state.jup ? this.displayInfo : this.tryAgain()}/> &nbsp;
                <img src={Saturn} width="300" height="200" onClick={this.state.sat ? this.displayInfo : this.tryAgain()}/> &nbsp;
                <img src={Uranus} width="300" height="200" onClick={this.state.uran ? this.displayInfo : this.tryAgain()}/> &nbsp;
                <img className="planets" src={Neptune} onClick={this.state.nept ? this.displayInfo : this.tryAgain()}/>
            </div>

        </div>)
    }
}


export default PlanetGame;