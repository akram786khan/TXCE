import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const TabSection = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div>
    <TabContext value={value}>
  <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
      <Tab label="Parity" value="1"/>
      <Tab label="Sapre" value="2" />
      <Tab label="Bcone" value="3" />
      <Tab label="Emerd" value="4" />
    </TabList>
  </Box>
  <TabPanel value="1">Item One</TabPanel>
  <TabPanel value="2">Item Two</TabPanel>
  <TabPanel value="3">Item Three</TabPanel>
  <TabPanel value="4">Item Foour</TabPanel>
</TabContext>
    </div>
  )
}

export default TabSection



