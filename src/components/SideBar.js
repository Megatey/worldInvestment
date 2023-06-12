import React from 'react'

const SideBar = () => {
  return (
    <div className='sidebar'>
    <span title='Share this site on Facebook'><i class="fa-brands fa-facebook-f"></i></span>
            <span title='Share this site on Twitter'><i class="fa-brands fa-twitter"></i></span>
            <span title='Share this site on LinkedIn'><i class="fa-brands fa-linkedin-in"></i></span>
            <span title='Copy link to the clipboard'><i class="fa-solid fa-link"></i></span>
    </div>
  )
}

export default SideBar