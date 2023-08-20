import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const MuiList = () => {
  return (
    <Box sx={{
      width:'400px',
      bgcolor:'#AAAAAA',
    }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>            
          </ListItemIcon>
          <ListItemText primary='List item 1' />
        </ListItem>
        
        <Divider />

        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary='List item 2' secondary="secondary text" />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='List item 3' />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='List item 4' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;