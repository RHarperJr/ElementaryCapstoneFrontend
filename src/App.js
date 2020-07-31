import React from 'react';
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


function App() {

  return (
    <Container>
      <Grid container className="gridRoot" spacing={5} justify="center">
        {/* <Grid item> */}
        {/* <Grid container justify="center" spacing={spacing}> */}
        <Grid item s={12} component={Link} to="/math">
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
        <Grid item s={12} component={Link} to="/science">
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
        <Grid item s={12} component={Link} to="/geography">
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

export default App;
