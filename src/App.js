import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/system'


import Navigation2 from './components/Navigation'


import routes from './routes'


const App = () => {

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <Navigation2 />
          <Routes>
            {routes.map((route, index)=>{
              return(
                <Route key = {index} path={route.path} element={<route.component/>}/>
              )
            })}
          </Routes>

        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
