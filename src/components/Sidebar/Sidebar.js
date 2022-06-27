import { React, useState } from 'react';
import './sidebar.css';
import SidebarMenu from './SidebarMenu';
import { GiHamburgerMenu } from 'react-icons/gi';
import BrandLogo from '../BrandLogo'

const Sidebar = () => {

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <div className='bars'>
      <GiHamburgerMenu onClick={()=>{setIsClicked(!isClicked); console.log(isClicked) }} />
      </div>
      
      <div className='sidebar' style={isClicked ? {left : '0%'}: {left: '-80%'}}>
        <BrandLogo />
        <hr />
        <ul>
          <SidebarMenu />
        </ul>

      </div>
    </div>
  )
}

export default Sidebar