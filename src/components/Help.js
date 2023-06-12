import React from 'react'
import { useNavigate } from 'react-router-dom'

const Help = () => {
  const navigate = useNavigate();
  return (<section id='help'>
    <div className='help'>
        <div className='help-header'><h1>HOW CAN WE HELP?</h1></div> 
        <div className='help-header-content'>
        <button onClick={() => navigate('/privacy-notices')}><i class="fa-solid fa-clipboard-question"></i> &nbsp;&nbsp;Privacy Notices</button>
        <button onClick={() => navigate('/terms-condition')}><i class="fa-solid fa-person-chalkboard"></i>&nbsp;&nbsp;Terms & Conditions</button>
        <button onClick={() => navigate('/contact-us')}> <i class="fa-solid fa-envelope-open-text"></i>&nbsp;&nbsp;Feed Backs</button>
        </div> 
    </div></section>
  )
}

export default Help