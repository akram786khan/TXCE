import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Accordition = ({
    icon= <AlternateEmailIcon/>,
    title='Support and Contact',
    innerContant=[]
}) => {
  return (
    <div className='accorddination'>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
          <div className='accord'>
           <div>{icon}</div>  
           <div className='ms-3'><p className='mt-3'>{title}</p></div>
        </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
         
       <div className='ms-5'>
       {innerContant.map((item,index)=>{
            return(
              <Typography>
                <div className='my-3'>
                {item}
                </div>
              </Typography>
            )
          })}
       </div>
          
        </AccordionDetails>
      </Accordion>

    </div>
  )
}

export default Accordition