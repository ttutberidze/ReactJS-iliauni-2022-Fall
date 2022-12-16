import './App.css';
import Posts from './posts/posts';
import Home from './home/home';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import SinglePost from './posts/singlePost/singlePost';
import Error from './error/error';

function App() {

  return (
    <div>
      {/* <BrowserRouter>
        
        <div className="routes">
          <Routes>
            <Route path='/error' element={ <Error /> } />
            <Route path='/posts/:postId' element={<SinglePost />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/' element={<Home counter={counter} />} />
          </Routes>
        </div>
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>         
          <Route path='/' element={<Home />}>
            <Route path='posts/' element={<Posts />} />
            <Route path='posts/:postId' element={<SinglePost />} />
            <Route path='error' element={ <Error /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
