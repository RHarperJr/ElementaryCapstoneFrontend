import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import '../../App.css';
import scale from '../../images/scale.png';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import calculator from '../../images/calculator.png';

class MathMain extends Component {
    render() {
        return (
            <Container>
                <Grid container className="gridRoot" spacing={5} justify="center">
                    {/* <Grid item> */}
                    {/* <Grid container justify="center" spacing={spacing}> */}
                    <Grid item s={12} component={Link} to="/math/calc">
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
                    <Grid item s={12} component={Link} to="/math/weight">
                        <Card className="gridCard">
                            <CardMedia
                                className="scale"
                                component="img"
                                image={scale}
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







