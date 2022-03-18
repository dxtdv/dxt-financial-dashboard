import React, {useState} from 'react'
import { Drawer, IconButton, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


//Internal imports
import { useStyles } from './NavigationStyle';
import MenuItem from './MenuItem'
import routes from '../routes'
import clsx from 'clsx';

const Navigation = () => {

  const classes = useStyles()
  const [open, setOpen]= useState(true)

  const toggleNavigation = () => {
    console.log('before',open)
    setOpen(!open)
    
  };

  // const menuItems = routes an array of the sidebar MenuItem which is imported from src/routes.js

  return (
    <div>
      <Drawer 
      // classes={{
      //     paper: clsx(classes.navigationDrawerPaper, !open && classes.navigationDrawerCollapse )
      //   }}
        variant="permanent" 
        open={false}       
      >
        <div className={classes.navigationToolbar}>
          <IconButton onClick={toggleNavigation}>
            <ArrowBackIosIcon/>
            {console.log('after',open)}
          </IconButton>
        </div>
        <div className={classes.logoWrapper} >
          <img className={classes.logo}

            alt="Logo"
            src="../logo.png"
          />
        </div>
        <List className={classes.navigationList}>

          {routes.map((route, index) => {
            return (
              <React.Fragment key={index}>
                {route.path === "/sign-out" && (
                  <div className={classes.navigationSpacer}></div>
                )}
                <MenuItem
                  label={route.label}
                  icon={route.icon}
                  path={route.path} />
              </React.Fragment>
            )
          })}
        </List>
      </Drawer>
    </div>
  )
}

export default Navigation
