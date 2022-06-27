import { React, useState } from 'react';
import menuItems from '../../data/dataset';
import { CgEnter } from 'react-icons/cg';
// import { Link } from 'react-router-dom';

const SidebarList = (props) => {

    const [active, setActive] = useState(0);

    return (
        <div>
            {menuItems && menuItems.map((item, i) => {
                return <li key={i} onClick={() => { setActive(i) }} className={active === i ? 'active' : ''}>
                    <span><item.icon /></span>
                    <span>{item.item}</span>
                </li>
            })
            }
            <li><span><CgEnter /></span>
                <span>Login/Register</span></li>
        </div>
    )
}

export default SidebarList