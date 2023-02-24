
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() { 
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    },1500);
    
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/"
            element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
          </Routes>
      </div>
    </BrowserRouter>
    </>
  ); 
}

export default App;
