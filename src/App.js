// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAl = (massage, type, bold)=>{
    setAlert({
      msg: massage,
      type: type,
      bold: bold
    })
    setTimeout(() => {
      setAlert(null);
    },1600);
  }
  const removeBodyClass = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }
  const toggleMode = (cls)=>{
    removeBodyClass();
    // console.log(cls);//////print Color name
    document.body.classList.add("bg-"+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#020033";
      showAl("DarkMode has been Enabaled !" ,"success", "Success" );////call function here
      ////Just for title change but this not SEO friendly content, Okey
      // document.title = 'TextUtils - Dark Mode';

      ////// Title fixed time mein change ater Enabled 
      // setInterval(() => {
      //   document.title='WelCome on TextUtils';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils Now';
      // }, 2500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAl("DarkMode has been Disabaled !", "info", "Success"); ////call function here
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      {/* <TextFrom/> */}
      {/* <Navbar/> */}
      <div className="container ">
        <Routes>
          <Route exact path = "/about" element={<About mode = {mode}/>}></Route>
          <Route exact path="/" element = {<TextFrom showAl={showAl} heading = "TextUtils - Word counter | Character counter | lowercase to uppercase | Uppercase to lowercase | Remove extra spaces" mode = {mode}/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
