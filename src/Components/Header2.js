import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PublicIcon from '@material-ui/icons/Public';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import App from '../App';
import { withRouter } from "react-router";


class ScrollableTabsButtonForce extends Component {

    state = {
        value: 0,
        routeIndexArr: ["/", "/math", "/science", "/geography"]
            
    }

    componentDidMount() {
        var current = window.location.href;
        if (current.indexOf("math") > 0) {
            this.setState({value: 1})
        } else if (current.indexOf("science") > 0) {
            this.setState({value: 2})
        } else if (current.indexOf("geography") > 0) {
            this.setState({value: 3})
        }
    }

    componentWillMount() {
        // will trigger the callback function whenever a new Route renders a component(as long as this component stays mounted as routes change)
        this.props.history.listen(() => {
          // view new URL
          console.log('New URL', this.props.history.location.pathname);
          var cardIndex = this.state.routeIndexArr.indexOf(this.props.history.location.pathname);
          console.log("cardIndex: " + cardIndex);
          if (cardIndex >= 0) {
            this.setValue(cardIndex);
          } else {
              console.log("Router path not found - app bar will not be updated.");
          }
        });
    }

    setValue = (newValue) => {
        this.setState({value: newValue});
    }

    a11yProps = (index) => {
        return {
            id: `scrollable-force-tab-${index}`,
            'aria-controls': `scrollable-force-tabpanel-${index}`,
        };
    }
    
    handleChange = (event, newValue) => {
        this.setValue(newValue);
    };

    render() {
        return (
            <div>
                <AppBar position="static" color="secondary" id="appbar">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="nav bar header tabs"
                    >
                        <Tab label="Home" component={Link} icon={<HomeIcon />} to="/" {...this.a11yProps(0)} />
                        <Tab label="Math" component={Link} icon={<AddIcon />} to="/math" {...this.a11yProps(1)} />
                        <Tab label="Science" component={Link} icon={<SearchIcon />} to="/science" {...this.a11yProps(2)} />
                        <Tab label="Geography" component={Link} icon={<PublicIcon />} to="/geography" {...this.a11yProps(3)} />
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

const HeaderWithRouter2 = withRouter(ScrollableTabsButtonForce);

export default HeaderWithRouter2;