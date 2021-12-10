import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import ProtectedRoute from './Components/ProtectedRoute';
import ProtectedLogin from './Components/ProtectedLogin';
import Shop from './Components/Shop';
import About from './Components/About';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
       <Route element={<ProtectedLogin/>}>
       <Route path="/" element={<Login/>}/>
       
       <Route path="/signup" element={<Signup/>}/>
       </Route>
       
       <Route element={<ProtectedRoute/>}>
       <Route path="/about" element={<About/>}/>
     <Route path="/shop" element={<Shop/>}/>
       <Route path="/home" element={<Home/>}/>
       
       
       </Route>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
