import React, {useState} from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const MuiTextField = () => {
    const [value,setValue] =useState('');
    return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <TextField label="Name" variant='outlined' />
            <TextField label="Name" variant='filled' />
            <TextField label="Name" variant='standard' />
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label="Small Color-Secondary" size='small' color='secondary' variant='outlined' />  
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField 
                label="Form Input" 
                value={value} 
                onChange={e => setValue(e.target.value)} 
                error={!value} 
                helperText={!value? 'Required' :'Add a text !!'} 
            />  
            <TextField label="Disabled" disabled/>  
            <TextField label="Read only" InputProps={{readOnly:true}} />  
            <TextField 
                label="Password" 
                type='password' 
                helperText="Don't show your password to anyone!!"
                InputProps={{endAdornment:<VisibilityIcon/>}}
            />  
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label="Amount" InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>}}/>
            <TextField label="Weight" InputProps={{endAdornment:<InputAdornment position='end'>kg</InputAdornment>}}/>
        </Stack>
    </Stack>
  );
};

export default MuiTextField;