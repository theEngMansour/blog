import React from 'react';
import Head from 'next/head';
import Image from 'next/image'
import PropTypes from 'prop-types';
import Settings from './settings';
import Create from './posts/create';
import MyPost from './my-posts';
import Tag from './tag/create';
import { Authenticated } from 'layouts';
import { FormattedMessage, useIntl } from 'react-intl';
import { Dashboard, Chart } from 'components/settings';
import { Tabs, Tab, Typography, Box } from '@mui/material';

export default function Profile() {
  const [value, setValue] = React.useState(0);
  const [title, setTitle] = React.useState();
  const [subtitle, setSubTitle] = React.useState();
  const { formatMessage } = useIntl()

  React.useEffect(() => {
    switch (value) {
      case 0: 
        setTitle(formatMessage({id: 'settings.dashboard'}))
        setSubTitle(formatMessage({id: 'settings.dashboard.sub'}))
      break
      case 1:
        setTitle(formatMessage({id: 'my.posts'}))
        setSubTitle(formatMessage({id: 'my.posts.sub'}))
      break
      case 2:
        setTitle(formatMessage({id: 'title.ask'}))
        setSubTitle(formatMessage({id: 'create.welcome'}))
      break
      case 3:
        setTitle(formatMessage({id: 'drawer.tags'}))
        setSubTitle(formatMessage({id: 'drawer.description.tag'}))
      break
      case 4:
        setTitle(formatMessage({id: 'drawer.settings'}))
        setSubTitle(formatMessage({id: 'drawer.settings.sub'}))
      break
      default:
        console.log(4)
      break
    }
  }, [value])

  return (
    <Authenticated>
      <Head>
        <title>{formatMessage({id: 'dashboard'})}</title>
      </Head>
      <div className="p-4 bg-white sm:p-6">
        <div className="md:flex md:justify-center text-center">
          <div className="m-auto">
            <div><Image src="/svg/logo-bemedia.svg" width={100} height={100} alt="bemedia"/></div>
            <div className="max-w-lg mx-auto text-center"> 
              <h1 style={{ fontFamily: "Montserrat-Bold"}} className="text-2xl text-red-500 sm:text-3xl m-0">
                {title}
              </h1>
              <p style={{ fontFamily: "Montserrat-light"}} className="mt-1 text-[gray]-500">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
      <BasicTabs value={setValue}/>
    </Authenticated>
  )
}

// BasicTabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const { formatMessage } = useIntl()

  const handleChange = (event, newValue) => {
    props.value(newValue)
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="bg-white">
                <Tab style={{ fontFamily: "Montserrat-Light"}} label={formatMessage({id: 'dashboard'})} {...a11yProps(0)} />
                <Tab style={{ fontFamily: "Montserrat-Light"}} label={formatMessage({id: 'my.posts'})} {...a11yProps(1)} />
                <Tab style={{ fontFamily: "Montserrat-Light"}} label={formatMessage({id: 'title.ask'})} {...a11yProps(2)} />
                <Tab style={{ fontFamily: "Montserrat-Light"}} label={formatMessage({id: 'drawer.tags'})} {...a11yProps(3)} />
                <Tab style={{ fontFamily: "Montserrat-Light"}} label={formatMessage({id: 'drawer.settings'})} {...a11yProps(4)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Dashboard />
          <Chart />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MyPost />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Create />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Tag />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Settings />
        </TabPanel>
    </Box>
  );
}

