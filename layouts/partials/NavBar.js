import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { MainLayout } from 'layouts';
import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  

export default function NavBar() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };

    return (
        <Paper className="shadow-sm rounded-none flex justify-center py-5">
            <Tabs
                value={value}
                onChange={handleChange}
                className="bg-slate-400 py-8"
            >
                <Tab className="text-xl" label="الرئيسية" {...a11yProps(0)} />
                <Tab label="التصنيفات" {...a11yProps(1)} />
                <Tab label="الإعلامين" {...a11yProps(2)} />
            </Tabs>
        </Paper>
    )
}
/* 
<div
axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
index={value}
onChangeIndex={handleChangeIndex}
>
<TabPanel value={value} index={0} dir={theme.direction}>
  Item One
</TabPanel>
<TabPanel value={value} index={1} dir={theme.direction}>
  Item Two
</TabPanel>
<TabPanel value={value} index={2} dir={theme.direction}>
  Item Three
</TabPanel>
</div> */