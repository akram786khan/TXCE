import React from 'react'
import Button from 'react-bootstrap/Button';

const CommanButton = ({
  title='Click me',
  style={}
  
}) => {
  return (
    <div>
        <Button variant="primary" style={{...style,borderRadius:'0px'}}>{title}</Button>
    </div>
  )
}

export default CommanButton