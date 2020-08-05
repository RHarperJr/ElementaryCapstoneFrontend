import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Apple from '../../images/Apple.png';
import Bananas from '../../images/Bananas.png';
import Basket from '../../images/basket.png';
import Blueberry from '../../images/Blueberry.png';
import emptyBasket from '../../images/emptyBasket.png';
import Kiwi from '../../images/Kiwi.png';
import Orange from '../../images/Orange.png';
import Watermelon from '../../images/Watermelon.png';


class WeightGame extends Component {

    state = {
        fruits: [],
        targetWeight: 0,
        currentWeight: 0,
        apple: 0, orange: 0, kiwi: 0, banana: 0,
        watermelon: 0, blueberry: 0,
        start: false,
        empty: true,
        modalOpen: false,
        win: false
    }

    componentDidMount() {
        fetch('https://agile-caverns-57379.herokuapp.com/math')
            .then(res => res.json())
            .then((data) => {
                this.setState({ fruits: data })
            })
            .catch(console.log)
            { document.body.classList.add("fruitBackground") }
    }

    Start = () => {
        this.setState({ start: true }, this.setTarget);
    }

    addFruit(id) {
        var newWeight;
        // do blueberry math
        if (id === 1) {
            newWeight = this.state.currentWeight + this.state.fruits[id - 1].weight;
            this.setState({ currentWeight: newWeight, blueberry: this.state.blueberry + 1 }, this.check);
        }
        // do kiwi math
        else if (id === 2) {
            newWeight = this.state.currentWeight + this.state.fruits[id - 1].weight;
            this.setState({ currentWeight: newWeight, kiwi: this.state.kiwi + 1 }, this.check);
        }
        // do watermelon math
        else if (id === 3) {
            newWeight = this.state.currentWeight + this.state.fruits[id - 1].weight;
            this.setState({ currentWeight: newWeight, watermelon: this.state.watermelon + 1 },this.check);
        }
        // do banana math
        else if (id === 4) {
            newWeight = this.state.currentWeight + this.state.fruits[id - 1].weight;
            this.setState({ currentWeight: newWeight, banana: this.state.banana + 1 }, this.check);
        }
        // do orange math
        else if (id === 5) {
            newWeight = this.state.currentWeight + this.state.fruits[id - 1].weight;
            this.setState({ currentWeight: newWeight, orange: this.state.orange + 1 }, this.check);
        }
        // do apple math
        else if (id === 6) {
            newWeight = this.state.currentWeight + this.state.fruits[id - 1].weight;
            this.setState({ currentWeight: newWeight, apple: this.state.apple + 1 }, this.check);
        }
    }
    check = () => {
        if (this.state.currentWeight === this.state.targetWeight) {
            this.youWin();
        }
        else if (this.state.currentWeight > this.state.targetWeight) {
            this.setState({ modalOpen: true });
        }
    }

    setTarget = () => {
        var target = Math.floor(Math.random() * 150) + 1;
        this.setState({ targetWeight: target });
    }

    reset = () => {
        this.setState({
            currentWeight: 0, apple: 0,
            watermelon: 0, kiwi: 0, orange: 0,
            blueberry: 0, banana: 0, empty: true, win: false,
            modalOpen: false
        }, this.setTarget);
    }

    youWin = () => {
        this.setState({ modalOpen: true, win: true });
    }

    handleClose = () => {
        console.log("closing modal");
        this.setState({ modalOpen: false, win: false }, this.reset);
    }
    componentWillUnmount() { document.body.classList.remove("fruitBackground") }
    render() {
        return (
            <div>
                <Modal show={this.state.modalOpen} handleClose={this.handleClose} >
                    {this.state.win ? (<div>
                        <p className="fruitTitle">You Won!</p>
                        <p className="buttonPlanetModal"> <Button variant="contained" onClick={this.reset}>Play Again</Button> <Button variant="contained" component={Link} to={"/"}>Return to Home</Button></p> </div>) :
                        <p className="buttonPlanetModal"><Button variant="contained" onClick={this.handleClose}> You went over! Click to restart </Button> <Button variant="contained" component={Link} to={"/"}>Return to Home</Button> </p>}
                </Modal>
                 <h1 className="mathTitle text-4">Fruit Stand</h1> 
                {/* <div class="fruittext">FRUIT</div><div class="fruittext"> STAND</div> */}
                <h2 className="mathSmallTitles">Click the button below to start! Add fruit to the basket to hit the desired weight!</h2>
                <p id="basketButton">{this.state.start ? "" : <Button className="startButton" variant="contained" onClick={this.Start}>Click To Play</Button>}</p>

                {this.state.start ?
                    <div text-align="center" >
                        <div text-align="center" className="bodyWrapper" >
                            <div className="float"><img className="fruit apple" alt="" src={Apple} onClick={this.addFruit.bind(this, 6)}/><p  align="center" className="fruitWeight" >Apples <p align="center"> weight: 7g</p> </p> </div> &nbsp;
                            <div className="float"><img className="fruit banana" alt="" src={Bananas} onClick={this.addFruit.bind(this, 4)} /> <p align="center" className="fruitWeight"> Bananas <p align="center"> weight: 10g </p> </p> </div> &nbsp;
                            <div className="float"><img className="fruit blueberry" alt="" src={Blueberry} onClick={this.addFruit.bind(this, 1)} /> <p align="center"  className="fruitWeight"> Blueberries <p align="center"> weight: 1g</p> </p> </div> &nbsp;
                            <div className="float"> <img className="fruit kiwi" alt="" src={Kiwi} onClick={this.addFruit.bind(this, 2)} /> <p align="center" className="fruitWeight"> Kiwis <p align="center"> weight: 3g </p> </p> </div> &nbsp;
                            <div className="float"> <img className="fruit oranges" alt="" src={Orange} onClick={this.addFruit.bind(this, 5)} /> <p align="center" className="fruitWeight"> Oranges <p align="center"> weight: 5g </p> </p> </div> &nbsp;
                            <div className="float"> <img className="fruit watermelon" alt="" src={Watermelon} onClick={this.addFruit.bind(this, 3)} /> <p align="center" className="fruitWeight"> Watermelon <p align="center"> weight:15g </p> </p> </div> 
                        </div>
                        <div align="center" className="basketWrapper">
                            <p>
                            {this.state.currentWeight === 0 ? <img className="basket" alt="" src={emptyBasket} /> : <img className="basket" alt="" src={Basket} />}
                            </p>
                            <h2 className="targetWeight"> Target weight: {this.state.targetWeight}g </h2>
                            <h2 className="currentWeight">Current weight: {this.state.currentWeight}g </h2>   
                            <Button variant="contained" onClick={this.reset}>Reset</Button> 
                        </div>

                    </div> : ""}

            </div>
        )
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

export default WeightGame;