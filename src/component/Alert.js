import React from 'react'

const alert={
position:"absolute",
width:"100%",
fontSize:"20px",
textAlign:"center"
}
function Alert({message,type}) {
  return (
      <div className={`alert alert-${type}`} style={alert} role="alert">
      {message}
      </div>
  )
}

export default Alert
