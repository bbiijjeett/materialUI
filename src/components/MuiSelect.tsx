import React,{useState} from 'react';
import {Box, TextField, MenuItem} from '@mui/material';

const MuiSelect = () => {
    const [country,setCountry] = useState('');
    const [countries,setCountries] = useState<string[]>([]);
    
    console.log({countries});
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string);
    };
    
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
    };
  return (
    <Box width='250px'>
        <TextField 
            label='Select country' 
            value={country} 
            onChange={handleChange} 
            select 
            fullWidth 
            size='small' 
            color='secondary'
            helperText="Select your country"
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='CA'>Canada</MenuItem>
        </TextField>
        <br></br>
        <TextField label='Select countries' value={countries} onChange={handleChange1} select fullWidth SelectProps={{multiple:true}}>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='CA'>Canada</MenuItem>
        </TextField>
    </Box>
  );
};

export default MuiSelect;