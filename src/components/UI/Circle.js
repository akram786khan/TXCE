import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const Circle = ({
    Color= 'red'
}) => {
  return (
    <div>
        <CircleIcon sx={{color:Color}}> </CircleIcon>
    </div>
  )
}

export default Circle