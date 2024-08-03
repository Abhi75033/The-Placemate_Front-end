import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Login from './Components/Login&Signup/Login.jsx'
import SignUp from './Components/Login&Signup/SignUp.jsx'
import Main from './Components/Main/Main.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
    
    <RouterProvider router={router} />
 
)
