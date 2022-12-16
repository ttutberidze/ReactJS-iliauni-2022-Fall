import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';

const Home = () => {
    return (
        <div className="App"> 
            <Sidebar />
            <div className='routes'><Outlet /></div>
        </div>
    )
}

export default Home;