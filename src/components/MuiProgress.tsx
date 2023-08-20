import React from 'react';
import { Stack, CircularProgress, LinearProgress } from '@mui/material';

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
        <CircularProgress variant="determinate" value={50} />

        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
        <LinearProgress variant="determinate" value={50} />
    </Stack>
  );
};

export default MuiProgress;