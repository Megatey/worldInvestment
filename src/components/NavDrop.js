import React from 'react'
import { Link } from 'react-router-dom'
const NavDrop = () => {
  return (
    <div className='nav-drop display-none'>
        <ul>
<Link to={'/'}><li>Home</li></Link>
<Link to={'/history'}><li>Brief History</li></Link>
<Link to={'/board-member'}><li>Board Member</li></Link>
<Link to={'/about-us'}><li>About Us</li></Link>
<Link to={'/contact-us'}><li>Feed Backs</li></Link>
<Link to={'/project'}><li>Project</li></Link>
<Link to={'/privacy-notices'}><li>Privacy Notices</li></Link>
<Link to={'/terms-condition'}><li>Terms & Conditions</li></Link>
            </ul>
    </div>
  )
}

export default NavDrop