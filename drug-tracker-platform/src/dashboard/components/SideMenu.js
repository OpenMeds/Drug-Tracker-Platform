import { styled } from '@mui/material/styles';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuContent from './MenuContent';
import DownloadIcon from '@mui/icons-material/Download';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 190;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});

const handleDownload = () => {
  const filePath = 'OpenMeds_June2025.xlsx'; // Adjust path as needed
  const link = document.createElement('a');
  link.href = filePath;
  link.download = 'OpenMedsDataset_062025.xlsx'; // Desired name for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function SideMenu(props) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <img src={window.location.origin+'/images/logo_v2.png'} height="130" width="130" alt="logo" style={{marginBottom:  .4+ 'em', marginTop:  .2+ 'em', marginLeft:  .5+ 'em'}}/>
      
      <Divider />
      <Box
        sx={{
          overflow: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MenuContent idx = {props.idx}/>
        
      </Box>
      <Stack
        direction="row"
        sx={{
          p: 2,
          flexGrow: 1, 
          justifyContent: 'space-between',
          gap: 1,
          alignItems: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        
        <List dense>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={handleDownload} >
              <ListItemIcon>{<DownloadIcon/>}</ListItemIcon>
              <ListItemText primary={"Download Current Dataset"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </Drawer>
  );
}
