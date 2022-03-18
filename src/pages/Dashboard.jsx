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

export default function Dashboard() {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    boxShadow: 1,
                    fontWeight: 'bold',
                    marginBottom:'20px'
                }}
            >
                <Box
                    sx={{
                        flex:2,
                        alignItems: 'center',
                        bgcolor: 'background.paper',
                        overflow: 'hidden',
                        borderRadius: '12px',
                        boxShadow: 1,
                        fontWeight: 'bold',
                        marginRight:'20px'
                    }}
                >
                    Dashboard page <br />
                    Dashboard page <br />
                    Dashboard page <br />
                    Dashboard page <br />
                    Dashboard page <br />
                </Box>
                <Box
                    sx={{
                        flex:1,
                        alignItems: 'center',
                        bgcolor: 'background.paper',
                        overflow: 'hidden',
                        borderRadius: '12px',
                        boxShadow: 1,
                        fontWeight: 'bold',
                    }}
                >
                    Dashboard page <br />
                    Dashboard page <br />
                    Dashboard page <br />
                    Dashboard page <br />
                    Dashboard page <br />
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    boxShadow: 1,
                    fontWeight: 'bold',
                }}
            >
                <Box
                    sx={{
                        flex:1,
                        alignItems: 'center',
                        bgcolor: 'background.paper',
                        overflow: 'hidden',
                        borderRadius: '12px',
                        boxShadow: 1,
                        fontWeight: 'bold',
                        marginRight:'20px'
                    }}
                >
                    Dashboard page <br />
                    Dashboard page <br />
                    Dashboard page <br />
                    Dashboard page <br />
                    Dashboard page <br />
                </Box>
                <Box
                    sx={{
                        flex:2,
                        alignItems: 'center',
                        bgcolor: 'background.paper',
                        overflow: 'hidden',
                        borderRadius: '12px',
                        boxShadow: 1,
                        fontWeight: 'bold',
                    }}
                >
                    Dashboard page <br />
                    Dashboard page <br />
                    Dashboard page <br />
                    Dashboard page <br />
                    Dashboard page <br />
                </Box>
            </Box>
        </Box>
    )
}
