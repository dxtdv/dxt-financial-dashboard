import { Box } from '@mui/system'
import React from 'react'
import Login from '../components/Login'


export default function UserLoginPage() {
  return (
    <Box
                sx={{

                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    boxShadow: 1,
                    fontWeight: 'bold',
                    justifyContent:'center',
                    marginTop:'100px'
                }}
            >
                <Login/>
            </Box>
  )
}
