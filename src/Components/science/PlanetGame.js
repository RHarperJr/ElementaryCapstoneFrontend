import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
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
        targetplanet: 0,
        info: false,
        start: false,
        planetInfo: [],
        modalOpen: false
    }

    componentDidMount() {
        fetch('https://agile-caverns-57379.herokuapp.com/science')
            .then(res => res.json())
            .then((data) => {
                this.setState({ planetInfo: data })
            })
            .catch(console.log)
        { document.body.classList.add("scienceBackground") }
    }

    setTarget = () => {
        var target = Math.floor(Math.random() * 8);
        if (target === 0) {
            this.setState({ merc: true, targetplanet: target });
        }
        else if (target === 1) {
            this.setState({ venus: true, targetplanet: target });
        }
        else if (target === 2) {
            this.setState({ earth: true, targetplanet: target });
        }
        else if (target === 3) {
            this.setState({ mars: true, targetplanet: target });
        }
        else if (target === 4) {
            this.setState({ jup: true, targetplanet: target });
        }
        else if (target === 5) {
            this.setState({ sat: true, targetplanet: target });
        }
        else if (target === 6) {
            this.setState({ uran: true, targetplanet: target });
        }
        else if (target === 7) {
            this.setState({ nept: true, targetplanet: target });
        }
    }

    setStart = () => {
        this.setState({ start: true }, this.setTarget);
    }

    displayInfo = () => {
        console.log("correct selection");
        this.setState({ modalOpen: true, info: true });

    }

    tryAgain = () => {
        console.log("incorrect selection");
        this.setState({ modalOpen: true, info: false })
    }

    resetTarget = () => {
        console.log("resetting target planet");
        this.setState({ modalOpen: false, info: false }, this.setTarget);
    }

    handleClose = () => {
        console.log("closing modal");
        this.setState({ modalOpen: false, info: false });
    }

    componentWillUnmount() { document.body.classList.remove("scienceBackground") }

    render() {
        return (<div>
            <Modal show={this.state.modalOpen} handleClose={this.handleClose} >
                {this.state.info ? (<div>
                    <p className="planetTitle">{this.state.planetInfo[this.state.targetplanet] ? this.state.planetInfo[this.state.targetplanet].name : ""}</p>
                    <p className="planetDescription">{this.state.planetInfo[this.state.targetplanet] ? this.state.planetInfo[this.state.targetplanet].description : ""}</p>

                    <p className="buttonPlanetModal"> <Button variant="contained" onClick={this.resetTarget}>Play Again</Button> <Button variant="contained" component={Link} to={"/"}>Return to Home</Button></p> </div>) :
                    <p className="buttonPlanetModal"><Button variant="contained" onClick={this.handleClose}> Almost...click to try again! </Button> <Button variant="contained" component={Link} to={"/"}>Return to Home</Button> </p>}
            </Modal>
            <div>

                <h1 className="titles">Our Solar System</h1>
                <h2 className="smallTitles">Click the button below to start! If you identify the right planet, you'll get some fun facts!</h2>
                <p align="center" >{this.state.start ? "" : <Button className="startButton" variant="contained" onClick={this.setStart}>Click To Play</Button>}</p>
                {this.state.start ? <h3 className="mediumTitles">Select {this.state.planetInfo[this.state.targetplanet].name}</h3> : ""}
            </div>
            <div align="center">
                <span className="sun"></span>
                <img className="planets mercury" alt="" src={Mercury} onClick={this.state.merc ? this.displayInfo : this.tryAgain} /> &nbsp;
                <img className="planets venus" alt="" src={Venus} onClick={this.state.venus ? this.displayInfo : this.tryAgain} /> &nbsp;
                <img className="planets earth" alt="" src={Earth} onClick={this.state.earth ? this.displayInfo : this.tryAgain} /> &nbsp;
                <img className="planets mars" alt="" src={Mars} onClick={this.state.mars ? this.displayInfo : this.tryAgain} />
                <img className="planets jupiter" alt="" src={Jupiter} onClick={this.state.jup ? this.displayInfo : this.tryAgain} /> &nbsp;
                <img className="planets saturn" alt="" src={Saturn} onClick={this.state.sat ? this.displayInfo : this.tryAgain} /> &nbsp;
                <img className="planets uranus" alt="" src={Uranus} onClick={this.state.uran ? this.displayInfo : this.tryAgain} /> &nbsp;
                <img className="planets neptune" alt="" src={Neptune} onClick={this.state.nept ? this.displayInfo : this.tryAgain} />
            </div>


        </div>)
    }
}

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
            </section>
        </div>
    );
};


export default PlanetGame;