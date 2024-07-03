import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider ,createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import Home from './components/Home/Home'
import Layout from './Layout.jsx'
import  About  from "./components/About/About";
import Contact from './components/Contact/Contact';
import Github from './components/Github/Github';
// import githubInfoloader from './components/Github/Github';
import User from './components/User/User';

// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {
//         path:"",element:<Home/>
//       },
//       {
//         path:"/About",element:<About/>
//       },
//       {
//         path:"/Contact",element:<Contact/>
//       }
//     ]
//   }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route  path="/" element={<Home />}></Route>
      <Route  path="About" element={<About />}></Route>
      <Route  path="Contact" element={<Contact />}></Route>
      <Route  path="user/:userid" element={<User />}></Route>
      <Route 
      // loader={githubInfoloader}
      path="Github" 
       element={<Github />}>

       </Route>
    </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


export default App;