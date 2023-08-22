import './App.css';
import { createTheme,colors, ThemeProvider } from '@mui/material';
// import MuiTypography from './components/MuiTypography';
// import MuiButton from './components/MuiButton';
// import MuiTextField from './components/MuiTextField';
// import MuiSelect from './components/MuiSelect';
// import MuiRadioButton from './components/MuiRadioButton';
// import MuiCheckbox from './components/MuiCheckbox';
// import MuiSwitch from './components/MuiSwitch';
// import MuiRating from './components/MuiRating';
// import MuiAutocomplete from './components/MuiAutocomplete';
// import MuiLayout from './components/MuiLayout';
 //import MuiCard from './components/MuiCard';
// import MuiAccordion from './components/MuiAccordion';
// import MuiImageList from './components/MuiImageList';
// import MuiNavbar from './components/MuiNavbar';
// import MuiLink from './components/MuiLink';
// import MuiBreadcrumbs from './components/MuiBreadcrumbs';
// import MuiDrawer from './components/MuiDrawer';
// import MuiSpeedDail from './components/MuiSpeedDail';
// import MuiBottomNavigation from './components/MuiBottomNavigation';
// import MuiAvatar from './components/MuiAvatar';
// import MuiBadges from './components/MuiBadges';
// import MuiList from './components/MuiList';
// import MuiChip from './components/MuiChip';
// import MuiTooltip from './components/MuiTooltip';
// import MuiTable from './components/MuiTable';
// import MuiAlert from './components/MuiAlert';
// import MuiSnackbar from './components/MuiSnackbar';
// import MuiDialog from './components/MuiDialog';
// import MuiProgress from './components/MuiProgress';
// import MuiSkeleton from './components/MuiSkeleton';
// import MuiLoadingButton from './components/MuiLoadingButton';
// import MuiTabs from './components/MuiTabs';
// import MuiTimeline from './components/MuiTimeline';
// import MuiMasonry from './components/MuiMasonry';
import MuiResponsiveness from './components/MuiResponsiveness';


const theme = createTheme({
  palette:{
    secondary:{
      main:colors.orange[500],
    },  
  }
});

function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiTextField /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckbox /> */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      {/* <MuiAutocomplete /> */}
      {/* <MuiLayout /> */}
      {/* <MuiCard /> */}
      {/* <MuiAccordion /> */}
      {/* <MuiImageList /> */}
      {/* <MuiNavbar /> */}
      {/* <MuiLink /> */}
      {/* <MuiBreadcrumbs /> */}
      {/* <MuiDrawer /> */}
      {/* <MuiSpeedDail /> */}
      {/* <MuiBottomNavigation /> */}
      {/* <MuiAvatar /> */}
      {/* <MuiBadges /> */}
      {/* <MuiList /> */}
      {/* <MuiChip /> */}
      {/* <MuiTooltip /> */}
      {/* <MuiTable /> */}
      {/* <MuiAlert /> */}
      {/* <MuiSnackbar />    */}
      {/* <MuiDialog /> */}
      {/* <MuiProgress /> */}
      {/* <MuiSkeleton /> */}
      {/* <MuiLoadingButton /> */}
      {/* <MuiTabs /> */}
      {/* <MuiTimeline/> */}
      {/* <MuiMasonry /> */}
      <MuiResponsiveness />
    </div>
    </ThemeProvider>
  );
};

export default App;
