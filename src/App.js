
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Ingredients from './components/ingredients/Ingredients';
import Main from './components/main/Main';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/home" element={<Main/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/ingredients" element={<Ingredients/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
