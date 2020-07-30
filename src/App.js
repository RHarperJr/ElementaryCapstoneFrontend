import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import './App.css';

function App() {

  return (
    <Container>
    <Grid container className="gridRoot" spacing={3} justify="center">
      {/* <Grid item> */}
        {/* <Grid container justify="center" spacing={spacing}> */}
            <Grid item s={12} component={Link} to="/math">
              <Card className="gridCard">
                Math
              </Card>
            </Grid>
            <Grid item s={12} component={Link} to="/science">
              <Card className="gridCard">
                Science
              </Card>
            </Grid>
            <Grid item s={12} component={Link} to="/geography">
              <Card className="gridCard">
                Geography
              </Card>
            </Grid>
        {/* </Grid> */}
      {/* </Grid> */}
    </Grid>
    </Container>
  );
}

export default App;
