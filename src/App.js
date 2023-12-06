import './App.css';
import Navbar from './componants/Navbar';
import TextArea from './componants/TextArea';
import About from './componants/About';
import { useState } from 'react';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom'


// testing 2 
// testing
// sending from local
// sending from github

function App() {
  const [mode, setMode] = useState()
  let count = 1;
  function save(text) {
    localStorage.setItem("count", count++)
    let c = localStorage.getItem("count")
    localStorage.setItem(`text${c}`, text)

  }
  function customColor(color) {
    document.body.style.backgroundColor = color;
    let a = document.querySelector(".navbar")
    a.style.background = color;
  }
  function darkBtnClicked() {
    if (document.body.style.background === "black") {
      document.body.style.background = "white"
      let a = document.querySelector(".navbar")
      a.style.background = "white"
      a.style.color = "black"
      setMode("dark")

    }
    else {
      document.body.style.background = "black"
      let a = document.querySelector(".navbar")
      a.style.background = "black"
      a.style.color = "white"
      document.querySelector(".navbar-toggler").style.background = "white"
      setMode("light")

    }
  }

  return (



    <Main>
      <>
        <Navbar clicked={darkBtnClicked} textMode={mode} customColor={customColor} />
        <Routes>
          <Route
            exact
            path="/home"
            element={<TextArea heading="Enter your case" save={save} textMode={mode} />}
          />
          <Route exact path="/about" element={<About textMode={mode} />} />
        </Routes>
      </>
    </Main>
  );
}

export default App;
