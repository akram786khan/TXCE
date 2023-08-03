import React from 'react'
import Paragraph from './Paragraph'

const Header = ({
    style={},
    title='',
    
}) => {
  return (
 
        <div style={{...style}} >  <Paragraph>{title}</Paragraph> </div>
  )
}

export default Header