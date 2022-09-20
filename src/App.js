import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// components
// import Home from './Home.js';
import Navigation from './Components/Navigation/Navigation.js';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm.js';
import Candidates from './Components/Candidates/Candidates.js';
//modules to import 
import {BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
            <Route index element={<RegistrationForm />}></Route>
            <Route path='/candidates-list' element={<Candidates />}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
