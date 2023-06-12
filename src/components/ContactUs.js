import React from 'react'
import ContactPage from './ContactPage'
import News from './News'
import Help from './Help'
import Interest from './Interest'
import TopBtn from './TopBtn'
import SideBar from './SideBar'

const ContactUs = () => {
  return (
    <div>
        <ContactPage/>
       <Help/>
       <Interest/>
      <TopBtn/>
      <SideBar/>
    </div>
  )
}

export default ContactUs