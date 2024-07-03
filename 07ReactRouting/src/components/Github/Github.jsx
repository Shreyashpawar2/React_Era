import React from 'react'
import { useState, useEffect } from 'react';
import { useLoaderData} from 'react-router-dom'

function Github() {
const [data,setData]=useState([]);
// const data=useLoaderData();

 useEffect(() => {
    fetch('https:https://github.com/Shreyashpawar2')
    .then(res=>res.json)
    .then(data=>{
        setData(data)
    })
 }, [])
 

  return (
   <>
   <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github followers : {data.followers?data.followers:100}</div>
   <img src={data.avatar_url} alt='picture'  />
   
   </>
  )
}

export default Github


// export const githubInfoloader=async()=>{
//     const resp=await  fetch('https:https://github.com/Shreyashpawar2') .then(data.json())
// }