import Box from '@mui/material/Box';
import TableauReact from './TableauReact';
import Copyright from '../internals/components/Copyright';

export default function AfricaPageGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <TableauReact />
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
