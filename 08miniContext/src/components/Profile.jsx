import React ,{ useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext);
    if(user!=null){
        if(!user.username) return <div>please login</div>

        return <div>Welcome {user.username}</div>
    }
   

    
}

export default Profile