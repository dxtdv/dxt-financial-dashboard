import React, { useContext } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Box } from '@mui/system'



import Navigation from './components/Navigation'
import routes from './routes'
import UserLoginPage from './pages/UserLoginPage'
import { AuthContext } from './AuthContext'



const App = () => {

  const { token } = useContext(AuthContext)
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          {token === "" ? <UserLoginPage /> : (
            <>
              <Navigation />
              <Routes>
                {routes.map((route, index) => {
                  return (
                    <Route key={index} path={route.path} element={<route.component />} />
                  )
                })}
                <Route path="/*" element={<Navigate to={token ? "/" : "/login"} />} />
              </Routes>
            </>
          )}
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App
