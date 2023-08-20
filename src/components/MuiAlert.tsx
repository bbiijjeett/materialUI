import React from 'react';
import { Stack, Alert, Divider, AlertTitle, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity="error" onClose={()=>alert("Close error")}>
            <AlertTitle>Error</AlertTitle>
            This is an error alert — check it out!
        </Alert>
        <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — check it out!
        </Alert>
        <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info alert — check it out!
        </Alert>
        <Alert 
            severity="success" 
            icon={<CheckIcon fontSize='inherit' />} 
            action={
                <Button color='inherit' size='small'>
                    Undo
                </Button>
            }
        >
            <AlertTitle>Success</AlertTitle>
            This is a success alert — check it out!
        </Alert>

        <Divider/>

        <Alert variant='outlined' severity="error">This is an error alert — check it out!</Alert>
        <Alert variant='outlined' severity="warning">This is a warning alert — check it out!</Alert>
        <Alert variant='outlined' severity="info">This is an info alert — check it out!</Alert>
        <Alert variant='outlined' severity="success">This is a success alert — check it out!</Alert>

        <Divider/>

        <Alert variant='filled' severity="error">This is an error alert — check it out!</Alert>
        <Alert variant='filled' severity="warning">This is a warning alert — check it out!</Alert>
        <Alert variant='filled' severity="info">This is an info alert — check it out!</Alert>
        <Alert variant='filled' severity="success">This is a success alert — check it out!</Alert>
    </Stack>
  );
};

export default MuiAlert;