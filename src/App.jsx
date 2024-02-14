import React, {useState , createContext, useEffect} from 'react'
import { useRoutes } from "react-router-dom";
import routes from './routes';
import Topbar from './Components/Topbar/Topbar'
import Sidebar from './Components/sidebar/Sidebar'
import './App.css'
import { darkmoodContext } from './Contexts/darkmood';



export default function App() {

const router = useRoutes(routes)
const [show, setShow] = useState(false); 
const [darkMood , setDarkMood] = useState(false);



useEffect(() => {
  const body = document.body

    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    if( darkMood === true ) {
      body.classList.add('dark-mode')
    } else {
      body.classList.remove('dark-mode')
    }

} , [darkMood])



  return (
   <darkmoodContext.Provider value={{darkMood,setDarkMood}}>
   <Topbar  show={show} setShow={setShow} />
   <div className={`container-page flex-wrap  `}>
    <Sidebar darkMood={darkMood}  show={show} setShow={setShow}  />
 
   {router}
   </div>
   </darkmoodContext.Provider>
  )
}

