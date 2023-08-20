import React, { useState } from 'react';
import { Stack, Chip, Avatar } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

const MuiChip = () => {

  const [chips,setChip] = useState(['chip1', 'chip2', 'chip3']);

  const handleDelete = (chipToDelete:string) => {
    setChip(chips => chips.filter((chip)=> chip !== chipToDelete))
  };

  return (
    <Stack direction='row' spacing={1}>
      <Chip label='chip' color='primary' size='small'  />
      <Chip label='chip' color='primary' size='small' icon={<FaceIcon/>} />
      <Chip label='chip - secondary' color='secondary' size='small' variant='outlined' />
      <Chip label='chip - secondary' color='secondary' size='small' variant='outlined' avatar={<Avatar>B</Avatar>} />
      <Chip label='click' color='success' onClick={()=> alert('Clicked!')}  />
      <Chip label='click' color='error' onClick={()=> alert('Clicked!')} onDelete={()=> alert('Delete handler called')}  />

      {
        chips.map(chip => 
            (
              <Chip key={chip} label={chip} onDelete={()=> handleDelete(chip)} />
            )
          )
      }

    </Stack>
  );
};

export default MuiChip;