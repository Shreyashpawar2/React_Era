import React ,{ useState,useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
 const [username, setusername] = useState('');
 const [password, setpassword] = useState('');

 const {setuser}=useContext(UserContext);

    const handlesubmit=(e)=>{
        e.preventDefault();
        setuser({username,password})
    };
    
  return (
   <>
   <h2>login</h2>
   <input type='text' placeholder='username'value={username}  onChange={(e)=>{setusername(e.target.value)}}/>
   <input type='text' placeholder='password' value={password}  onChange={(e)=>{setpassword(e.target.value)}}/>
   <button onClick={handlesubmit}>submit</button>

   </>
  )
}

export default Login