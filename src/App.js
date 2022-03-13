import React from 'react'
export default function App() {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh',
      fontFamily:'roboto'

    }}>
      <img src = "./logo.png" alt = "DXT Financial DashBoard logo" style={{
        width:'100px'
      }
      }/>
      <h1 style={{
        color:'#6EC177',
        margin: 0
      }}>This is a financial dashbord</h1>
      <h2>Comming soon!</h2>
    </div>
  )
}
