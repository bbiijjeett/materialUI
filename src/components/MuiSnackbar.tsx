import React,{useState, forwardRef} from 'react';
import { Snackbar, Button, Alert, AlertProps } from '@mui/material';


const SnackbarAlert = forwardRef<HTMLDivElement,AlertProps>(
    function SnackbarAlert(props, ref){
        return <Alert elevation={6} ref={ref} {...props}/>
    }
);

const MuiSnackbar = () => {
    const [open, setOpen] = useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?:string) => {
        if(reason === "clickaway"){
            return 
        }
        setOpen(false);
    }
  
  return (
    <>
        <Button onClick={()=> setOpen(true)}>Submit</Button>
        {/* <Snackbar 
            message="Form submitted successfully!"
            autoHideDuration={6000}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical:'bottom',
                horizontal:'center'
            }}
        /> */}

        <Snackbar 
            autoHideDuration={6000}
            open={open}
            onClose={handleClose}
        >
                <SnackbarAlert  onClose={handleClose} severity='success'>
                    Form submitted successfully!
                </SnackbarAlert>
        </Snackbar>

    </>
  );
};

export default MuiSnackbar;