import React from 'react';
import { Stack, Link, Typography } from '@mui/material';

const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href='#'>Link</Link>
        <Link href='#' variant='body2'>Link</Link>
        <Typography variant='h3'><Link href='#'>Link</Link></Typography>
        <Link href='#' color='secondary'>Link</Link>
        <Link href='#' color='secondary' underline='hover'>Link</Link>
        <Link href='#' color='secondary' underline='none'>Link</Link>
    </Stack>
  );
};

export default MuiLink;