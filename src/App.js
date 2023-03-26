import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");          // enable dark mode
      document.body.style.backgroundColor = "#042743";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path='/' element={<TextForm heading="Enter your text to analyze:" mode={mode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;