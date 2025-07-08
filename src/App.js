import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode,setMode]= useState('light');
  const[alert,setAlert]=useState(null);
  const[themeColor,setThemeColor]=useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg:message ,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const applyTheme=(color)=>{
    setThemeColor(color);
    document.body.style.backgroundColor=color;

    showAlert(`Theme color changed!`,"success");
  }

 const toggleMode = () =>{
        if(mode==='light'){
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert("Dark mode has been enabled","success");
          document.title="TextUtils-Dark Mode"
        }
        else 
        {
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light mode has been enabled","success")
        }
  }

  return (
    <>  
    {/* <Router> */}
      <Navbar  title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} applyTheme={applyTheme} />
      {/* <Navbar/> */}
      <Alert alert={alert} />
      <div className="container my-3">
         {/* <Routes>
              <Route exact path="/about" element={<About /> } / >
                
              
              <Route exact path="/"element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} themeColor={themeColor} />} />
                    
             
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} themeColor={themeColor} />
        </div>
       
      {/* </Router> */}
    </>
  );
}

export default App;
