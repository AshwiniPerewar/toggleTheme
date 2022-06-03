import './App.css';
import Theme from './components/Theme';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
function App() {
  const{ isDarkMode }=useContext(ThemeContext);
  return (
    
    
      <div  className={`App ${isDarkMode ? "dark":"light"}`}>
      <Theme/>
      </div>
      
    
  );
}

export default App;
