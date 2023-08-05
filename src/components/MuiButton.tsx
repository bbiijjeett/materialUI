import React,{useState} from 'react';
import {Stack,Button,IconButton,ButtonGroup, ToggleButton,ToggleButtonGroup} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderedlineIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
    const [formats,setFormats] = useState<string | null>(null);
    console.log({formats,});
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>,updatedFormats:string | null) => {
        setFormats(updatedFormats);
    };
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href="https://www.google.com">Google</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='text' color='primary'>Primary</Button>
            <Button variant='text' color='secondary'>Secondary</Button>
            <Button variant='text' color='error'>Error</Button>
            <Button variant='text' color='warning'>Warning</Button>
            <Button variant='text' color='info'>Info</Button>
            <Button variant='text' color='success'>Success</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='outlined' color='primary'>Primary</Button>
            <Button variant='outlined' color='secondary'>Secondary</Button>
            <Button variant='outlined' color='error'>Error</Button>
            <Button variant='outlined' color='warning'>Warning</Button>
            <Button variant='outlined' color='info'>Info</Button>
            <Button variant='outlined' color='success'>Success</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>} disableRipple onClick={()=> alert('Clicked!!!')}>Send</Button>
            <Button variant='contained' endIcon={<SendIcon/>} disableElevation>Send</Button>
            <IconButton aria-label='send' color='success' size='small'><SendIcon/></IconButton>
        </Stack>
        <Stack direction='row'>
            <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary' aria-label='alignement button group'>
                <Button onClick={()=> alert('Left Clicked!!!')}>Left</Button>
                <Button onClick={()=> alert('Center Clicked!!!')}>Centre</Button>
                <Button onClick={()=> alert('Right Clicked!!!')}>Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'> 
            <ToggleButtonGroup orientation='vertical' aria-label='text formating' value={formats} onChange={handleFormatChange} size='small' color='success' exclusive>
                <ToggleButton value='bold'><FormatBoldIcon /></ToggleButton>
                <ToggleButton value='italic'><FormatItalicIcon /></ToggleButton>
                <ToggleButton value='underlined'><FormatUnderedlineIcon /></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
    
  );
};

export default MuiButton;