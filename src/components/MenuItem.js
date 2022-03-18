import React, { useState } from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import clsx from 'clsx';

import { useStyles } from './MenuItemStyle'


const MenuItem = ({ label, icon, path }) => {
  const [active, setActive] = useState( true )

  
  const classes = useStyles()


  

  return (
    <>
      <ListItem  className={clsx(classes.menuItem, active && classes.menuItemActive)}  disablePadding>
       <ListItemButton 
       LinkComponent={path}> 
          <ListItemIcon
           style={active?{
             color:'green'
           }:{}}
          className={clsx( classes.menuItemIcon, active && classes.menuItemIconActive)}>
            {icon}
          </ListItemIcon>
          <ListItemText primary={label} primaryTypographyProps={{ variant: "body2" }}
            className={clsx(classes.menuItemText, active && classes.menuItemTextActive)}
          />
        </ListItemButton> 
      </ListItem>
    </>
  )
}

export default MenuItem
