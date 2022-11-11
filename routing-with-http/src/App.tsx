import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './main/home';
import Users from './main/users';
import About from './main/about';
import Sidebar from './sidebar';
import SingleUser from './main/users/singleUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:userId' element={<SingleUser />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
