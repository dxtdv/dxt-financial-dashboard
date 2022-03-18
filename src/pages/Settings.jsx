import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function Settings() {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Typography paragraph>

                Settings page <br />
                Settings page <br />
                Settings page <br />
                Settings page <br />
                Settings page <br />
                Settings page <br />
                Settings page <br />
                Settings page <br />
                Settings page <br />
                Settings page <br />
                Settings page <br />
                Settings page <br />
                Settings page <br />
                Settings page <br />
                Settings page <br />
            </Typography>
        </Box>
    )
}
