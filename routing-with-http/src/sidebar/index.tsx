import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <ul className='sidebar'>
            <li><NavLink to="/" style={({isActive}) => ({
                color: isActive ? 'red' : undefined
            })}>Home</NavLink></li>
            <li><NavLink to="/users" className={({isActive}) => isActive ? 'activeLink' : undefined}>Users</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? 'activeLink' : undefined}>About</NavLink></li>
        </ul>
    )
}

export default Sidebar;