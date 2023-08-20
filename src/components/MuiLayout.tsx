import React from 'react';
//import { Box, Stack, Divider, Grid, Paper } from '@mui/material';
import {List, ListItem, ListItemAvatar,ListItemText,Avatar,Divider,Typography } from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const MuiLayout = () => {
  return (
    // <Paper sx={{padding:'32px'}} elevation={4}>
    //     <Stack sx={{border:'1px solid'}} direction='row' spacing={1} divider={<Divider orientation='vertical' flexItem />}>
    //         <Box sx={{
    //                 backgroundColor: 'primary.main',
    //                 color: 'white',
    //                 height: '100px',
    //                 width: '100px',
    //                 padding: '16px',
    //                 '&:hover':{
    //                     backgroundColor: 'primary.light',
    //                 }
    //             }}
    //         >
    //             MuiLayout
    //         </Box>
    //         <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2}>

    //         </Box>
    //     </Stack>
    //     <Grid container my={4} rowSpacing={2} columnSpacing={1}>
    //         <Grid item xs={6}>
    //             <Box bgcolor='primary.light' p={2}>
    //                 item1
    //             </Box>
    //         </Grid>
    //         <Grid item xs={6}>
    //             <Box bgcolor='primary.light' p={2}>
    //                 item2
    //             </Box>
    //         </Grid>
    //         <Grid item xs={6}>
    //             <Box bgcolor='primary.light' p={2}>
    //                 item3
    //             </Box>
    //         </Grid>
    //         <Grid item xs={6}>
    //             <Box bgcolor='primary.light' p={2}>
    //                 item4
    //             </Box>
    //         </Grid>
    //     </Grid>
    //  </Paper>
    <>
        <List
             sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
              }}
        >
            <ListItem>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <Divider component="li" />
            <li>
                <Typography
                sx={{ mt: 0.5, ml: 2 }}
                color="text.secondary"
                display="block"
                variant="caption"
                >
                Divider
                </Typography>
            </li>
            <ListItem>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <Divider component="li" variant="inset" />
            <li>
                <Typography
                sx={{ mt: 0.5, ml: 9 }}
                color="text.secondary"
                display="block"
                variant="caption"
                >
                Leisure
                </Typography>
            </li>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon color='primary' />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>  
        </List>
    </>
  );
};

export default MuiLayout;