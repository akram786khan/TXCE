import React from 'react'
import Layout from '../../Layouts';
import RisHead from '../../components/UI/RisHead'
import Accordition from '../../components/UI/Accordition'
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import MessageIcon from '@mui/icons-material/Message';
import AnnouncementIcon from '@mui/icons-material/Announcement';

const index = ({
  id=' 2704602',
  Mobile=' +919772964419',
  Nickname=' Member780511a0',
  Avbalnace=' ₹ 0.00'
}) => {
  return (
    <>
       <div>
        <RisHead manu={true} title='Mine'/>
        <div className='min-head'>
        <div>
            <p><b>ID:</b>{id}</p>
            <p><b>Mobile:</b>{Mobile}</p>
            <p><b>Nick Name:</b>{Nickname}</p>
            <p><b>Available balance:</b>{Avbalnace}</p>
        </div>
        </div>
        <div className='mb-5 pb-4'>
        <Accordition innerContant={['Email','whatsapp']}/>

<Accordition icon={<ListAltIcon/>} title='Order' />

<Accordition icon={<CardGiftcardIcon/>} title='Promotion'/>

<Accordition icon={<AccountBalanceWalletIcon/>} title='Wallet' innerContant={['Recharge','Withdrawal' , 'Transactions']} />

<Accordition icon={<CreditCardIcon/>} title='Bank Card'/>

<Accordition icon={<BusinessIcon/>} title='Address' />

<Accordition icon={<SecurityIcon/>} title='Account Security' innerContant={['Reset Password']}/>

<Accordition icon={<MessageIcon/>} title='Complaints & Suggestions' />

<Accordition icon={<AnnouncementIcon/>} title='About'/>

        </div>
       </div>
       </>
  )
}

export default index