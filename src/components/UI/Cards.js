import React from 'react'
import Card from 'react-bootstrap/Card';
import CommanButton from './CommanButton';
import Header from './Header';
import Image from './Image';
import { useState,useEffect } from 'react';
import { SixCards } from '../../backend/Cards/SixCards';



const Cards = ({
  style = {},
  color = ''
}) => {


  const [Listdata, setListdata] = useState([])

  useEffect(() => {
    setListdata(SixCards)
  }, [])
  

  return (
    <>
  <div className='just'>
  <div className='shadow'>

  {/* <div className='borderr'>
          <Header className='container-fluidr head' title='AmuseBox' style={{ width: '100%', backgroundColor: '#0288d1', height: '60px', color: 'white', display: 'flex', alignItems: 'center' }} />
        </div> */}
        <Header className='container-fluidr head' title='AmuseBox' style={{ width: '100%', backgroundColor: '#0288d1', height: '60px', color: 'white', display: 'flex', alignItems: 'center' }} />
            <div className='size' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <div style={{width: '93%'}}>
           
     
        {
              Listdata &&
              Listdata.map((item,index) =>{
                return(
                  <div className='container my-2 card'>
                  <Card.Body className='ms-12 sm-12'>
                    <div className='Display col-sm-12'>
                      <div>
                        <Image source={item.image} style={{ width: '140px' }} />
                      </div>
                      <div className='dis'>
                        <Card.Title >Special title treatment</Card.Title>
                        <Card.Text>
                          ■Challenge players worldwide in multiplayer! You can race against up to seven other players, whether they're registered as in-game friends
                        </Card.Text>
                    </div>
                    </div>
         
                  </Card.Body>
                  <div className='d-flex justify-content-between mb-2 px-4 border-top pt-2'>
                     <div>
                       <p>View this game</p>
                    </div>
                    <div>
                      <CommanButton title='Start Now' style={{ backgroundColor: '#0097a7', boxShadow: '0px 1px 5px black', border: 'none' }} />
                    </div>
                  </div>
         
                 </div>
                )
              })
            }
       
      

         
            
          
            

                
        
        {/* jhdgqyudqu */}
{/* 
        <div className='container my-2 card'>
         <Card.Body className='ms-12 sm-12'>
           <div className='Display col-sm-12'>
             <div>
               <Image source='https://img.cooe.in/media/unnamed.webp' style={{ width: '140px' }} />
             </div>
             <div className='dis'>
               <Card.Title >Special title treatment</Card.Title>
               <Card.Text>
                 ■Challenge players worldwide in multiplayer! You can race against up to seven other players, whether they're registered as in-game friends
               </Card.Text>
           </div>
           </div>

         </Card.Body>
         <div className='d-flex justify-content-between mb-2'>
            <div>
              <p>View this game</p>
           </div>
           <div>
             <CommanButton title='Start Now' style={{ backgroundColor: '#0097a7', boxShadow: '0px 1px 5px black', border: 'none' }} />
           </div>
         </div>

        </div> */}
 
     

      
            </div>
            </div>
      </div>
  </div>
    </>

  )
}

export default Cards





