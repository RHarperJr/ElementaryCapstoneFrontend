import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import './App.css';
import Science from './images/Science.png';
import Geography from './images/Geography.png';
import math from './images/math.png';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'


class App extends Component {

  componentDidMount(){
    {document.body.classList.add("homePage")}
  }

  componentWillUnmount() { document.body.classList.remove("homePage") }

  render() {
    return (
    
      <Container>
        <h1 className="home">"Cool games for kids who want to learn good and do other things good too"</h1>
        <h3 className="homeSubTitle">Click one of the icons below to play a game</h3>
        <Grid container className="gridRoot" spacing={5} justify="center">
          {/* <Grid item> */}
          {/* <Grid container justify="center" spacing={spacing}> */}
          <Grid item s={12} component={Link} to="/math" id="mathCard">
            <Card className="gridCard">
              <CardMedia
                component="img"
                image={math}
                />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Math: Play around with Numbers!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item s={12} component={Link} to="/science" id="scienceCard">
            <Card className="gridCard">
              <CardMedia
                component="img"
                image={Science}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Science: Play the "Planets" game to learn about our Solar System!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item s={12} component={Link} to="/geography" id="geoCard" >
            <Card className="gridCard">
              <CardMedia
                component="img"
                image={Geography}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Geography: Do you know all the continents? Play our game to see!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* </Grid> */}
          {/* </Grid> */}
        </Grid>
      </Container>
    );

  }
} 

export default App;
