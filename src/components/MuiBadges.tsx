import React from 'react';
import { Stack, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const MuiBadges = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Badge badgeContent={5} color='primary'>
            <MailIcon />
        </Badge>
        <Badge badgeContent={2} color='secondary'>
            <MailIcon />
        </Badge>
        <Badge badgeContent={0} color='secondary'>
            <MailIcon />
        </Badge>
        <Badge badgeContent={0} color='secondary' showZero>
            <MailIcon />
        </Badge>
        <Badge badgeContent={100} color='secondary'>
            <MailIcon />
        </Badge>
        <Badge badgeContent={273} color='secondary' max={999}>
            <MailIcon />
        </Badge>
        <Badge variant='dot' color='primary'>
            <MailIcon />
        </Badge>
        <Badge variant='dot' color='primary' invisible={true}>
            <MailIcon />
        </Badge>
    </Stack>
  );
};

export default MuiBadges;