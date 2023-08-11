import React from 'react';
import { Box, FormControlLabel,Switch } from '@mui/material';

const MuiSwitch = () => {
  return (
    <Box>
        <FormControlLabel label="Dark mode" control={<Switch/>}/>
    </Box>
  );
};

export default MuiSwitch;