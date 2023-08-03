import React from 'react'
// import { Grid } from '@material-ui/core'
import Grid from '@mui/material/Grid';
// import Header from './Header'
// import Footer from './Footer'
import TabNavigation from './TabNavigation'
const Layout = ({children}) => {
  return (
    <Grid>
    {/* <Grid>
     <Header/> 
    </Grid> */}
    <main>
      {children}
    </main>
      <Grid>
        {/* <Footer/> */}
        <TabNavigation/>
      </Grid>
    </Grid>
  )
}

export default Layout;
