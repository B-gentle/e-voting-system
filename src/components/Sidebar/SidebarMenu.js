import { React, useState } from 'react';
import menuItems from '../../data/dataset';
import { CgEnter } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

const SidebarList = ({click}) => {
const [logview, setLogview] = useState(false)
    return (
        <div onClick={click}>
            {menuItems && menuItems.map((item, i) => {
                return <NavLink key={i} to={item.href} className='list'>
                    <span><item.icon /></span>
                    <span>{item.item}</span>
                </NavLink>
            })
            }
            <li>
                <main onClick={()=>setLogview(!logview)}>
                <span><CgEnter /></span>
                <span>Login/Register</span>
                </main>
                <ul className={ logview ? 'logs display' : 'logs'}>
                   <NavLink className='list' to='/login'>Login</NavLink>
                   <NavLink className='list' to='/register'>Register</NavLink>
                </ul>
            </li>
        </div>
    )
}

export default SidebarList