import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabOne from './registrationBox/TabOne';
import TabTwo from './registrationBox/TabTwo';
import TabThree from './registrationBox/TabThree';

export default function Registration() {
  const [value, setValue] = React.useState('1');
  const [formValue, setFormValue] = React.useState({})
  const [amount, setAmount] = React.useState()
  const category = [
    {
        categoryName: "AMASI Member",
        currency: "INR",
        amount: "11800"
    },
    {
        categoryName: "Non-AMASI Members",
        currency: "INR",
        amount: "12980"
    },
    {
        categoryName: "Gynaecologists",
        currency: "INR",
        amount: "6490"
    },
    {
        categoryName: "SAARC Delegates",
        currency: "INR",
        amount: "12980"
    },
    {
        categoryName: "Foreign Delegates",
        currency: "USD",
        amount: "236"
    }
  ]

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleFormValue = (value) => {
    setFormValue(value)
  }
  const handleAmount = (amountValue) => {
    setAmount(amountValue)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Step 1" value="1" disabled={value === "1" ? false : true}/>
            <Tab label="Step 2" value="2" disabled={value === "2" ? false : true}/>
            <Tab label="Step 3" value="3" disabled={value === "3" ? false : true}/>
          </TabList>
        </Box>
        <TabPanel value="1"><TabOne category={category} handleChange={handleChange} handleAmount={handleAmount}/></TabPanel>
        <TabPanel value="2"><TabTwo handleChange={handleChange} handleFormValue={handleFormValue}/></TabPanel>
        <TabPanel value="3"><TabThree handleChange={handleChange} formValue={formValue} amount={amount} category={category}/></TabPanel>
      </TabContext>
    </Box>
  );
}