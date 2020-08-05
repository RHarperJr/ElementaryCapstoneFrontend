import React from 'react';
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
import {withRouter} from "react-router";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));



function ScrollableTabsButtonForce() {
    const classes = useStyles();
    
    const [value, setValue] = React.useState(0);
    // a11yProps(index);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary" id="appbar">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="nav bar header tabs"
                >
                    <Tab label="Home" component={Link} icon={<HomeIcon />} to="/" {...a11yProps(0)} />
                    <Tab label="Math" component={Link} icon={<AddIcon />} to="/math" {...a11yProps(1)} />
                    <Tab label="Science" component={Link} icon={<SearchIcon />} to="/science" {...a11yProps(2)} />
                    <Tab label="Geography" component={Link} icon={<PublicIcon />} to="/geography" {...a11yProps(3)} />
                </Tabs>
                {/* <TabPanel value={value} index={0}>
                    Item One
                    {console.log("inside tab panel 0")}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                    {console.log("inside tab panel 1")}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                    {console.log("inside tab panel 2")}
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                    {console.log("inside tab panel 3")}
                </TabPanel> */}
            </AppBar>
        </div>
    );
}
const HeaderWithRouter = withRouter(ScrollableTabsButtonForce);

export default HeaderWithRouter;