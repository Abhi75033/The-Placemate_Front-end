import '../../App.css'

import { TbDeviceDesktopCode } from "react-icons/tb";
import { IoShareSocialOutline } from "react-icons/io5";
import { TiSocialAtCircular } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import { useState } from 'react';
import { FaChartPie } from "react-icons/fa6";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Header() {

    const [isHoverd,setHoverd]=useState(false)
    const [data,setData]=useState([])
    const [login,setLogin] = useState(true)
    const [display,sedisplay] = useState("Login")

    const navigate = useNavigate()

    const handleMouseEnter = ()=>{
        setHoverd(true)
    }

    const handleMouseLeave=()=>{
        setHoverd(false)
    }



   

    const getdata = async()=>{
        try {
          const resp = await axios.get('http://localhost:3000/success',{withCredentials:true})
          console.log(resp.status);
        
          if (resp.status==200) {
            setData(resp.data.user)
            setLogin(true)
            
           
          }
          
        } catch (error) {
            setLogin(false)
          console.log(error);
        }
      }

      const logout = async()=>{
        
        window.open('http://localhost:3000/logout',"_self")
        
        
      }


      

   
      
    
    React.useEffect(()=>{
      getdata()
      
    },[])

    return ( 
       <div className=''> 
         <div  style={{backgroundColor:'#010A20'}} className='' >
       <div >
       <div style={{marginBottom:'-.7%',backgroundColor:'',paddingTop:'1rem',paddingBottom:'1rem'}} className="container  
            header  text-light">
        <div>
            <ul style={{fontWeight:'500',paddingTop:'.8rem'}} className='header_list resp gap-3 
            list-unstyled fs-6 '>
                <li>Services</li>
                <li style={{cursor:'pointer'}} onMouseEnter={handleMouseEnter}
                onClick={handleMouseLeave} 
                 className='block'> Niche <IoIosArrowDown/></li>
                <li>Mock Interview</li>
                <li>Pricing</li>
            </ul>
        </div>  
       <div className='text-center me-5'>
       <h4 style={{cursor:'pointer'}} onClick={()=>navigate('/')}
        className="playwrite text-center header_heading fw-bold"><span className='fw-bold color'>The</span> Placemate</h4>
       </div>
       <div className='d-flex'>
         <button onClick={login?logout:()=>navigate('/login')} style={{marginRight:'-6%'}}
          className='border-0  bg-transparent fs-6 text-light'>
           {login?"Logout":"Login"}
        </button>
       { login == false && <button style={{}} onClick={()=>navigate('/signup')}
        className=' header_signIn border-1 border-light bg-transparent   text-light bg-dark rounded-pill '>
            Sign up 
        </button>}
     
     { login && <Avatar className='ms-4' alt={data.name} src={data?.image} />}
  

       </div>
       </div>
       
       </div>
   
       <div style={{width:'15%',height:'ato', background:'#ffff'
       ,position:'absolute' ,zIndex:'999', left:'%' ,marginTop:'-1%', display:isHoverd?'block':'none'} } 
       className=' border rounded  niche'>
 
        <p style={{cursor:'pointer'}} className='ms-2 mt-2' value='Web-Devlopment'> 
             <span><TbDeviceDesktopCode className='text-danger'/></span>
             &nbsp;&nbsp;Web Devlopment</p>
       
        <p className='ms-2 mt-1' value='Web-Devlopment'>
             <span><IoShareSocialOutline className='text-danger'/>
             </span>&nbsp;&nbsp;Digital Marketing</p>

             <p className='ms-2 mt-1' value='Web-Devlopment'>
             <span><BsGraphUp className='text-danger'/>
             </span>&nbsp;&nbsp;Data Analyst</p>
             <p className='ms-2 mt-1' value='Web-Devlopment'>
             <span><MdOutlineScience className='text-danger'/>
             </span>&nbsp;&nbsp; Data Scientist</p>
             <p className='ms-2 mt-1' value='Web-Devlopment'>
             <span><FaChartPie className='text-danger'/>
             </span>&nbsp;&nbsp; Business Analyst</p>
       </div>
  
        </div>
       </div>
     );
}

export default Header;