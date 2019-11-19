import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import Member_Account from '../Login_S/Member_Account'
import Member_Order from '../Login_S/Member_Order';
import Member_Information from '../Login_S/Member_Information';
import Navigation_Navber from '../../components/Navigation_Navber/Navigation_Navber'
import Footer from '../../components/Navigation_Navber/Footer'
import {
  ListGroup,
  Container,
  Accordion,
  Button,
  Form,
  Card,
  Row,
  Col,
  Table
} from 'react-bootstrap';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    // height: '50vh',
    width:'1000px',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
     <Navigation_Navber/>
    <Container  maxWidth="100%" style={{'margin-top':'2rem'}}>
    <Member_Account />
    <div className={classes.root}>
  
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        
        <Tab label="我的訂單" {...a11yProps(0)} />
        <Tab label="公告通知" {...a11yProps(1)} />
        <Tab label="個人資料" {...a11yProps(2)} />
        <Tab label="我的優惠" {...a11yProps(3)} />
        <Tab label="會員紅利" {...a11yProps(4)} />
        <Tab label="文章" {...a11yProps(5)} />
        <Tab label="活動" {...a11yProps(6)} />
        <Tab label="登出"  />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Member_Order/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Member_Information/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
    </Container>
    <Footer/>
    </>
  );
}