import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import '../../App.css';
import watermelon_for_tile from '../../images/watermelon_for_tile.png';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import calculator from '../../images/calculator.png';

class MathMain extends Component {

    componentDidMount(){
        {document.body.classList.add("homePage")}
    }
    
    componentWillUnmount() { document.body.classList.remove("homePage") }

    render() {
        return (
            <Container>
                <h1 className="home">Math Games</h1>
                <Grid container className="gridRoot" spacing={5} justify="center">
                    {/* <Grid item> */}
                    {/* <Grid container justify="center" spacing={spacing}> */}
                    <Grid item s={12} component={Link} to="/math/calc" id="discountCard">
                        <Card className="gridCard">
                            <CardMedia
                                component="img"
                                image={calculator}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Discount Calculator: Learn about sales!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item s={12} component={Link} to="/math/weight" id="weightCard">
                        <Card className="gridCard">
                            <CardMedia
                                className="scale"
                                component="img"
                                image={watermelon_for_tile}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Fruit Game!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default MathMain;







