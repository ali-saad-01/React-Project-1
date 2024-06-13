
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Contect from './pages/Contect';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
import FatchApi from './components/FeatchApi/FatchApi';
import AddressApi from './components/FeatchApi/AddressApi';
import { AuthProvider } from './pages/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forget from './pages/Forget';
function App() {



  return (
    <div >
      <AuthProvider>
      <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
              <a className="navbar-brand " href="/">React Project</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item ml-2">
                    <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item ml-2">
                    <a className="nav-link active text-light" aria-current="page" href="/featch">Data Fetching API</a>
                  </li>
                  <li className="nav-item ml-2">
                    <a className="nav-link active text-light" aria-current="page" href="/addressdata">User Address Data</a>
                  </li>
                  <li className="nav-item ml-2">
                    <a className="nav-link text-light" href="/Login">Login</a>
                  </li>
                  <li className="nav-item ml-2">
                    <a className="nav-link text-light" href="/Signup">Signup</a>
                  </li>
                  <li className="nav-item ml-2">
                    <a className="nav-link text-light" href="/contect">Contact Us</a>
                  </li>
                  <li className="nav-item ml-2">
                    <a className="nav-link text-light" href="/About">About Us</a>
                  </li>
                  
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2 text-light" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-dark btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>

       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contect' element={<Contect/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/featch' element={<FatchApi/>}/>
        <Route path='/addressdata' element={<AddressApi/>}/>
        <Route path='/forgetpass' element={<Forget/>}/>

        

       </Routes>

      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
