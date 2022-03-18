
import { makeStyles } from '@mui/styles';



export const useStyles = makeStyles((theme)=>({

  
  // navigationDrawer:{
  //   width: (theme) => "240px",
  //   "& .MuiBackdrop-root": {
  //     display: "none"
  //   }
  // },
  navigationDrawerPaper: {
    width: (theme) => "240px",
    backgroundColor: "rgba(120, 120, 120, 0.2)"
  },

  navigationDrawerCollapse:{
width:theme.spacing(9),
  },

navigationToolbar:{
  display:'flex',
  justifyContent:'flex-end',
  alignItems:'center',
  paddingRight:theme.spacing(1),
  ...theme.mixins.toolbar,
},

  logoWrapper:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: '#DEEED7'

  },

  logo:{
    width:'100px',
    cursor:'pointer'
  },
  
  navigationList:{
    display:'flex',
    flexDirection:'column',
    alignItems:'left',
    flex:1,
  },


  navigationSpacer:{
    flex:1,
  }
}))