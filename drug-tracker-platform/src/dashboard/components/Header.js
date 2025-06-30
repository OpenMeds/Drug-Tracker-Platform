import Stack from '@mui/material/Stack';

export default function Header(props) {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'center',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
    
      <Stack direction="row" sx={{ gap: 1 }}>
        <header className="header bold-text">{props.title}</header>
        
      </Stack>
    </Stack>
  );
}
