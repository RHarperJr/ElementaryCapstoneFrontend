import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import money from '../images/money.png';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';



class DiscountCalc extends Component {

    state = {
        price: 0, discount: 0, finalValue: 0, savings: 0, info: 0
    }

    showInfo = () => {
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

    updatePrice = (e) => {
        e.preventDefault();
        var inputPrice = e.target.value;
        if (inputPrice < 0 || isNaN(inputPrice)) {
            console.log("WARNING: Negative price");
            this.setState({ price: inputPrice });
        } else {
            this.setState({ price: inputPrice });
        }
    }

    updateDiscount = (e) => {
        e.preventDefault();
        var inputDiscount = e.target.value;
        if (inputDiscount < 0 || inputDiscount > 100 || isNaN(inputDiscount)) {// || !Number.isInteger(inputDiscount)) {
            console.log("WARNING: invalid percentage. Needs to be a number between 0 and 100");
            this.setState({ discount: inputDiscount });
        } else {
            this.setState({ discount: inputDiscount });
        }
    }

    calculatePrice = () => {
        var disc_decimal = this.state.discount / 100;
        var savings_calc = this.state.price * disc_decimal;
        var finalPrice = this.state.price - savings_calc;
        this.setState({ finalValue: finalPrice, savings: savings_calc });
    }

    render() {
        return (<div>
            <div className="bodyWrapper">
                <div className="calculator">
                    Discount Calculator
                    <div className="inputs">
                        Enter the original price: &nbsp;
                            <TextField error={this.state.price < 0 || isNaN(this.state.price)}
                            helperText={this.state.price < 0 || isNaN(this.state.price) ? "ERROR; invalid number" : ""}
                            id="outlined-basic" label="Price" variant="outlined" onChange={this.updatePrice}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            size="small" />
                    </div>

                    <div className="inputs">
                        Enter the discount percent: &nbsp;
                        <TextField error={(this.state.discount < 0 || this.state.discount > 100 || isNaN(this.state.discount))}
                            helperText={(this.state.discount < 0 || this.state.discount > 100 || isNaN(this.state.discount)) ? "ERROR; invalid percentage" : ""}
                            id="outlined-basic" label="Discount" variant="outlined" onChange={this.updateDiscount}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                            }}
                            InputLabelProps={{ shrink: true }}
                            size="small" />
                    </div>

                    <div className="button">
                        <Button variant="contained" onClick={this.calculatePrice}> Calculate </Button> <IconButton onClick={this.showInfo} aria-label="info"><InfoIcon /></IconButton>

                    </div>
                    <p>
                        Final Price: ${Math.floor(this.state.finalValue * 100) / 100}
                    </p>
                    <p>
                        Savings: ${Math.floor(this.state.savings * 100) / 100}
                    </p>
                </div>

                {this.state.info === 0 ? (
                    <div className="info" >
                        <img className="money" src={money}></img>
                    </div>
                ) : (
                        <div className="info" >
                            <p className="infoTitle">
                                This calcuation is achieved by:
                                </p>
                            <p>
                                Discount / 100 = Decimal Value
                                </p>
                            <p>
                                {this.state.discount} / 100 = {this.state.discount / 100}
                            </p>
                            <p>
                                Decimal Value * Original Price = Savings
                                </p>
                            <p>
                                {this.state.discount / 100} * {this.state.price} = {this.state.savings}
                            </p>
                            <p>
                                Original Price - Savings = Final Price
                    </p>
                            <p>
                                {this.state.price} - {this.state.savings} = {this.state.finalValue}
                            </p>
                        </div>
                    )}
            </div>

        </div>)
    }
}

export default DiscountCalc;