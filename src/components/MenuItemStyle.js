
import { makeStyles } from '@mui/styles';



export const useStyles = makeStyles((theme)=>({
  menuItem: {
    width:'100%',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor:'#DEEED7'


  },
  menuItemActive: {
    background: '#EBEBEC'
  },

  menuItemIcon: {

  },

  menuItemIconActive: {
    color: "green"
  },

  menuItemText: {
    fontSize: '20px'
  },

  menuItemTextActive: {
    fontWeight: "bold",
  },
}))