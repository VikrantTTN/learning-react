import './App.css';
import { useState } from 'react';
// import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  const [Mode, setMode] = useState('light')
  const toggleDarkMode=()=>{
    if(Mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#042743';
    }
  }
  
  return (
    <>
    <Navbar title="TextApplication" mode={Mode} toggleDarkMode={toggleDarkMode}/>

    <div className="container">
    <Form title="TextForm" mode={Mode}/>
    </div>

    {/* <About/> */}

    
    
    </>
     );
}

export default App;
