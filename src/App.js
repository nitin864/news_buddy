import Home from './components/Home' 
import Business from './components/Business' 
import './App.css';
import Tech from './components/Tech' 
import { BrowserRouter as Router, Switch , Route , Link, Routes, BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route index element={<Home></Home>}/>
        <Route path= "/home" element={<Home></Home>}></Route>
        <Route path= "/business" element={<Business></Business>}></Route>
        <Route path= "/Tech" element={<Tech></Tech>}></Route>
       </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
