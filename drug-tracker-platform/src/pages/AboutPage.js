
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../tailwind.css";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppNavbar from '../dashboard/components/AppNavbar';
import SideMenu from '../dashboard/components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Copyright from '../dashboard/internals/components/Copyright';

import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../dashboard/theme/customizations';


const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'rgb(40, 44, 52)',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name,
  description,
  link,
) {
  return { name, description, link};
}

const rows = [
  createData('United States', "FDA Shortage Dataset", "https://www.fda.gov/drugs/drug-safety-and-availability/drug-shortages"),
  createData('United States', "ASHP Shortage Dataset", "https://www.ashp.org/drug-shortages/current-shortages/drug-shortages-list?page=All"),
  createData('EU', "Shortage Dataset", "https://www.ema.europa.eu/en/human-regulatory-overview/post-authorisation/medicine-shortages-availability-issues/public-information-medicine-shortages"),
  createData('Canada', "Shortage Dataset", "https://www.drugshortagescanada.ca/"),
  createData('Australia', "Shortage Dataset", "https://apps.tga.gov.au/prod/MSI/search"),
  createData('UK', "Shortage Dataset", "https://www.clinigengroup.com/direct/en/drug-shortages?sortDirection=asc&sortColumn=1&page=1"),
  createData('The African Exponent', "African Pharmaceutical Companies", "https://www.africanexponent.com/top-50-local-pharmaceutical-manufacturers-in-africa/"),
];

export default function AboutPage(props) {
  return (
    <div className="App">
      <header className="App-header">
        <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
      <SideMenu idx ={1}/>
      <AppNavbar />
    <>
    
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url(/images/about_background.jpeg)',
            }}
          >
            
          </div>
          <div className="container relative mx-auto">
            <div className="flex-wrap flex h-screen justify-center items-center">
              <div className="w-full px-4 ml-auto mr-auto text-center">
                <div className="px-12 ">
                  <h1 className="text-logoBlue font-semibold text-5xl">
                    About <i>OpenMeds</i>
                  </h1>
                  <br/>
                  <div>
                  <Box className="p-3"
                    sx={{ width: '100%', height: 300, minWidth: 700, bgcolor: 'white', opacity: .75}}
                  >
                    <p className="mt-4 text-left text-lg text-blueGray-800" >
                      Medicine shortages are one of the most urgent, yet overlooked, challenges in global health.
                      From chemotherapy drugs in the U.S. to essential antibiotics in sub-Saharan Africa, shortages disrupt care, 
                      drive up costs, and leave millions without the medicines they need. Yet the data to track and anticipate these 
                      shortages remains scattered, delayed, or behind paywalls.
                      <br/><br/>
                      <strong>OpenMeds is trying to change that.</strong>
                      <br/><br/>
                      We are building an open-access drug shortage intelligence platform — a global dashboard that aggregates 
                      public data on medicine availability from regulatory bodies, health systems, and supply chain sources. Our mission is to 
                      unlock transparency, spark innovation, and enable faster, smarter action to ensure medicines reach the people who need them most.
                    </p>
                    <br/>
                  </Box>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section className="relative py-10 bg-blueGray-50">
          

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              
              <div className="w-full ml-auto mr-auto px-4">
                <div >
                
                  <h3 className="text-3xl font-semibold py-5 text-logoBlue"> <i className="fas fa-database text-xl"></i> &nbsp; Data Sources</h3>
              
                 <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Country/Organization</StyledTableCell>
                        <StyledTableCell >Description</StyledTableCell>
                        <StyledTableCell >Link</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell >{row.description}</StyledTableCell>
                          <StyledTableCell>{row.link}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                  
                </div>
              </div>
            </div>
          </div>
          <br/>
          <Copyright sx={{ my: 4 }} />
        </section>

                      
        
      </main>
      
    </>
    </Box>
    </AppTheme>
    </header>
    </div>
  );
}

