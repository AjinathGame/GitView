import React, { useState } from 'react'
import OIP from '../assets/OIP.webp'
import axios from 'axios'


const GitVeiw = () => {
    const [img, setimg] = useState(OIP)
    const [userName, setuserName] = useState('') 

    const loadData = async({username}) =>{
        console.log(username);
        try {
            let result = await axios.get(`https://api.github.com/users/${username}`)
            setimg(result.data.avatar_url)
            console.log(result.data);
        } catch (error) {
            
        }
    }

 
    return (
        <div className='h-screen w-screen flex flex-col justify-start items-center mt-[30px] '>
            <div className='h-[70px] w-[35vw] bg-gray-400 flex justify-evenly rounded-full items-center px-4'>
                <input
                    type='text'
                    placeholder='Search User...'
                    className='h-[50px] w-[25vw] rounded-full pl-[15px] outline-none bg-white'
                    value={userName}
                    onChange={(e)=> setuserName(e.target.value)}
                />
                 <button
                    className='bg-red-600 h-[40px] w-[100px] text-white rounded-full'
                    onClick={() => loadData({username : userName})}
                >
                    Search...
                </button>
            </div>
            <div className='h-[250px] w-[250px] rounded-full mt-[100px]'>
                <img src={img} alt="" className='h-full w-full rounded-full object-cover'/>
            </div>
        </div>
    )
}

export default GitVeiw
