// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import About from "./components/About"
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";
// import About from './components/About';
function App() {
  // const [modelight, setmode] = useState("light")
  // const [mode, setmode] = useState("light")
  // const [modered, setmode] = useState("red")
  // const [modeyellow, setmode] = useState("yellow")
  // const [modeblue, setmode] = useState("blue")
  // const [modedark, setmode] = useState("dark")
  const [textmode, settextmode] = useState("dark")
  const [alert, setAlert] = useState(null)
  // const toggleMode = ()=>{
  //   if(mode==="light"){
  //     setmode("dark");
  //     settextmode("light");
  //     document.querySelector("body").style.backgroundColor="#0b3156";;
  //     showAlert("Dark mode enabled","success");
  //   }
  //   else{
  //     setmode("light");
  //     settextmode("dark");
  //     document.querySelector("body").style.backgroundColor="white";
  //     showAlert("Light mode enabled","success");
  //   }
  // }
  const lightTheme = ()=>{
    // setmode("light");
    settextmode("white");
    document.querySelector("body").style.backgroundColor="white";
    showAlert("Light theme enabled","success");
  }
  const darkTheme = ()=>{
    // setmode("light");
    settextmode("black");
    document.querySelector("body").style.backgroundColor="#0b3156";
    showAlert("Dark theme enabled","success");
  }
  const redTheme = ()=>{
    // setmode("light");
    settextmode("white");
    document.querySelector("body").style.backgroundColor="#f84343";
    showAlert("Red theme enabled","success");
  }
  const blueTheme = ()=>{
    // setmode("light");
    settextmode("black");
      document.querySelector("body").style.backgroundColor="#0037fff0";
      showAlert("Blue theme enabled","success");
    }
    const yellowTheme = ()=>{
      // setmode("light");
      settextmode("white");
      document.querySelector("body").style.backgroundColor="#ffc00fdb";
      showAlert("Yellow theme enabled","success");
    }
    const showAlert = (message,type)=>{
      setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Textutils" modelight={lightTheme} modered={redTheme} modeblue={blueTheme} modeyellow={yellowTheme} modedark={darkTheme}  textTheme={textmode}/>
    {/* <Navbar title="Textutils" modelight={lightTheme} modered={redTheme} modeblue={blueTheme} modeyellow={yellowTheme} modedark={darkTheme} toggleTheme = {toggleMode} textTheme={textmode}/> */}
    <Alert alert ={alert} />
    <div className = "container">
    {/* <Switch> */}
          {/* <Route exact path="/about">
            <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
              <TextForm titleheading = "Enter your text here to analyze:" textTheme={textmode} alert={showAlert}/>
          {/* </Route> */}
      {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
