import React from 'react'

const ContactDialogue = ({setShowCatalogue}) => {
  return (
    <div className='contact-dialog'>
         <div className='alignment al'>
       <div className='contact-dialog-header'>
       <span className='contact-dialog-header-span' onClick={() => setShowCatalogue(false)}>&times;</span>
        <button className='send contact-dialog-header-span'><i class="fa-solid fa-paper-plane"></i></button>
        </div>
       
        <div className='contact-dialog-content'>
       
        <div className='contact-dialog-contents'>
     
        <span className='contact-dialog-contents-span2'><input type='email' placeholder='From'/></span>
        </div>
        <div className='contact-dialog-contents'>

        <span className='contact-dialog-contents-span2'><input type='text' placeholder='Subject'/></span>
        </div>
        <div className='contact-dialog-contents'>

        <span className='contact-dialog-contents-span2'><textarea placeholder='Compose' className='contact-dialog-contents-textarea'>Compose</textarea> </span>
        </div>

        </div></div>
       </div>
  )
}

export default ContactDialogue