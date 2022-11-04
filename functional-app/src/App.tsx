import './App.css';
import { useTheme } from './context/themeContext';
import Main from './main';
import Sidebar from './sidebar';

function App() {
  const {theme} = useTheme();
  return (
    <div className="App" style={theme}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
