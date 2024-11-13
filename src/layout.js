import React from 'react'
import Header from './Header.js'

function layout({children}) {
  return (
    <div>
        <Header />
            {children}
        
      
    </div>
  )
}

export default layout
