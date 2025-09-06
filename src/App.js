// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';

// import About from './components/About';
//let username= "gehnak";
function App() {
  const [mode, setMode] = useState('light'); //tells whether dark mode is enabled or not
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled.", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success")
    }
  }
  const redMode = ()=>{
    if (mode !== 'red') {
      setMode('red');
      document.body.style.backgroundColor = "#270a0aff"
    }
  }
    const yellowMode = ()=>{
    if (mode !== 'yellow') {
      setMode('yellow');
      document.body.style.backgroundColor = "#767601ff"
    }
  }
  const greenMode = ()=>{
    if (mode !== 'green') {
      setMode('green');
      document.body.style.backgroundColor = "#043104ff"
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode} redMode={redMode} yellowMode={yellowMode} greenMode={greenMode}/>
        <Alert alert={alert}/>

        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={ <About />}/> */}
            {/* <Route exact path="/" element={ */}
              <Textform showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
              {/* }/> */}
           
         {/* </Routes> */}
          {/* <About/> */}
        </div>
      {/* </BrowserRouter> */}
   </> 
  );
} 

export default App;
