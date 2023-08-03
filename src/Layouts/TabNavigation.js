import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import WineBarIcon from '@mui/icons-material/WineBar';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import StarsIcon from '@mui/icons-material/Stars';
import FaceIcon from '@mui/icons-material/Face';
import { useNavigate } from 'react-router-dom';

const TabNavigation = () => {
  const navigate = useNavigate()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        
      setValue(newValue);
      switch(newValue){
        case 0:
          navigate('/#')
          break;
          case 1:
            navigate('/Win')
            break;
            case 2:
              navigate('/Aviator')
              break;
              case 3:
                navigate('/Lucky')
                break;
                case 4:
                  navigate('/Mine')
                  break;
      }
    }

  return (
    <div>
    <Tabs className='Tabs border border-1'  value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab className='Tab' icon={<VideogameAssetIcon />} label="Amuse" />
      <Tab className='Tab' icon={<WineBarIcon />} label="Win" />
      <Tab className='Tab' icon={<FlightTakeoffIcon />} label="Aviator" />
      <Tab className='Tab' icon={<StarsIcon />} label="Lucky Hit" />
      <Tab className='Tab' icon={<FaceIcon />} label="Mine" />
    </Tabs>
    </div>
  )
}

export default TabNavigation