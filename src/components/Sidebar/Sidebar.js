import { React, useState } from 'react';
import './sidebar.css';
import SidebarMenu from './SidebarMenu';
import { GiHamburgerMenu } from 'react-icons/gi';
import BrandLogo from '../BrandLogo'

const Sidebar = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = ()=>{
    setIsClicked(!isClicked)
  }

  return (
    <div>
      <div className='bars'>
      <GiHamburgerMenu onClick={handleClick} />
      </div>
      
      <div className={ isClicked ? 'sidebar' : 'sidebar items'} style={isClicked ? {left : '0%'}: {left: '-80%'}}>
        <BrandLogo />
        <hr />
        <ul>
          <SidebarMenu click={handleClick} />
        </ul>

      </div>
    </div>
  )
}

export default Sidebar