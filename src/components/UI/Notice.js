import React from 'react'
import { Button } from 'react-bootstrap'
import CommanButton from './CommanButton'

const Notice = ({
    balance='0.00',
    NoticeData ="",
    backgroundColor="",
    btnBackgroundColor="",
    btncolor=""

}) => {
    return (
        <div className='not'>
            {/* <div> */}
                <div className='notice' style={{backgroundColor:backgroundColor}}>
                <h5 className='ms-2 mt-2'>Notice</h5>
               <div className='mx-3'>
               <p >Important Notice: The original official email address lulaowai121@gmail.com ❌❌❌ is invalid. If you receive any information from this email address, it is false. Please tell your cooe friends. The latest official email address is: service@cooe.in ①Important note: Please do not transfer money directly to the account you have paid, please recharge according to the account on the recharge interface. ②In order to facilitate each user's withdrawal, our withdrawal time is 10:00-22:00. No withdrawal service will be provided at other times. ③For recharge problems, please send details on the official cooe email! Mail ID： service@cooe.in Do mail on above Mail ID👆 Send these details 👇 1. Your cooe ID 2. Amount 3. Date of Payment 4. Payment screenshot (Please reply with the same email! This way your question can be dealt with as quickly as possible!)</p>
                <CommanButton title='Got It' style={{border:'2px solid white',backgroundColor:btncolor, padding:'7px 23px 7px 23px'}}/>
               </div>
                </div>
                <div className='notice1' style={{backgroundColor:btnBackgroundColor}}>
                <h4 className='mt-3 ms-4'>Available balance: ₹ {balance}</h4>
                  <div className='d-flex ms-4 mt-3'>
                 <div>
                 <CommanButton title='Recharge' style={{padding:'7px 25px 7px 25px' ,boxShadow:'1px 1px 3px black', backgroundColor:btncolor,border:'none'}}/>
                 </div>
                 <div className='ms-4'>
                 <CommanButton  title='Read Rule' style={{padding:'7px 25px 7px 25px',backgroundColor:'#e0e0e0',color:'black',boxShadow:'1px 1px 3px black',border:'none'}}/>
                 </div>
                  </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Notice