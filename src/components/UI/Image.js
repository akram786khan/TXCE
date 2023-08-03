import React from 'react'

const Image = ({
  source='',
  style={}
}) => {
  console.log(style)
  return (
    <img src={source} style={{...style}} />
  )
}

export default Image