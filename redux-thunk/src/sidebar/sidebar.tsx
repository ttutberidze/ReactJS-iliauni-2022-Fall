import {NavLink} from 'react-router-dom';
import TestClass from '../testClass';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li><NavLink to='/' className={({isActive}) => isActive ? 'myActiveClass' : undefined }>Home</NavLink></li>
                <li><NavLink to="/posts" 
                        className={({isActive}) => isActive ? 'myActiveClass' : undefined } 
                        style={({isActive}) => isActive ? {color: 'red'} : undefined}>Posts</NavLink></li>
            </ul>
            <TestClass  />
        </div>
    )
}

export default Sidebar;