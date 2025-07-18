import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ContactPageSharpIcon from '@mui/icons-material/ContactPageSharp';

const mainListItems = [
  { text: 'Dashboard', icon: <AnalyticsRoundedIcon />, url:"/" },
  { text: 'About', icon: <InfoRoundedIcon />,url:"/about" },
  { text: 'Contact', icon: <ContactPageSharpIcon />, url:"/contact" },
  
];


export default function MenuContent(props) {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={index === props.idx} href={item.url}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Stack>
  );
}
