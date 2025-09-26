import React, { useState } from 'react'
import OIP from '../assets/OIP.webp'
import axios from 'axios'


const GitVeiw = () => {
    const [img, setimg] = useState(OIP)
    const [userName, setuserName] = useState('')
    const [data, setdata] = useState('')
    const [notfound, setnotfound] = useState('')
    const [url, seturl] = useState('')

    const loadData = async ({ username }) => {
        try {
            let result = await axios.get(`https://api.github.com/users/${username}`)
            setimg(result.data.avatar_url)
            setdata(result.data)
            console.log(result.data);
            setnotfound(false)
            seturl(result.data.html_url)

        } catch (error) {
            setnotfound(true)
        }

    }



    if (notfound) {
        return (
            <div className='flex flex-col justify-center items-center h-screen w-screen bg-black/95'>
                <h1 className='text-5xl font-bold text-red-600'>User Not Found</h1>
                <button className="button" id='button' onClick={() => setnotfound(false)} >
                    <div className="dots_border"></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="sparkle"
                    >
                        <path
                            className="path"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke="black"
                            fill="black"
                            d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
                        ></path>
                        <path
                            class="path"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke="black"
                            fill="black"
                            d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
                        ></path>
                        <path
                            class="path"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke="black"
                            fill="black"
                            d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
                        ></path>
                    </svg>
                    <span class="text_button">GO BACK</span>
                </button>
            </div>
        );
    }

    return (
        <div className='min-h-[100vh] overflow-y-hidden overflow-x-hidden w-screen flex flex-col justify-start items-center bg-black/90 '>
            <h1 className='mt-[70px] text-6xl font-bold text-white mb-[20px] '>Git<span className='text-red-600'>Veiw</span></h1>
            <div className='h-[70px] w-[90vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] p-[15px] bg-gray-400 mt-[10px] flex justify-center lg:justify-evenly lg:p-[15px] gap-2 rounded-full items-center px-4'>
                <input type='text' placeholder='Search User...' className='h-[50px]  w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] rounded-full pl-[15px] outline-none bg-white' value={userName} onChange={(e) => setuserName(e.target.value)} />
                <button
                    className='bg-red-600 h-[40px]  w-[100px] text-white p-[10px] rounded-full cursor-pointer' onClick={() => loadData({ username: userName })} >Search...
                </button>
            </div>
            <div className='h-[250px] w-[250px] cursor-pointer rounded-full mt-[70px] '>
                <img src={img} alt="" className='h-full w-full rounded-full object-cover' />
            </div>
            <div className='flex justify-center flex-col items-center mt-[40px] w-full md:flex-row gap-7'>
                <span className='text-xl font-bold text-white'>Name : {data.name}</span>
                <span className='text-xl font-bold text-white'>Repo : {data.public_repos} </span>

                <span className='text-xl font-bold text-white'>Followers : {data.followers}</span>
                <span className='text-xl font-bold text-white'>Following : {data.following}</span>

            </div>
            <a href={url} className='mt-[50px] flex justify-center items-center gap-3 mb-[20px] text-white text-xl font-bold'>
                <button class="button">
                    <div class="dots_border"></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="sparkle"
                    >
                        <path
                            class="path"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke="black"
                            fill="black"
                            d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
                        ></path>
                        <path
                            class="path"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke="black"
                            fill="black"
                            d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
                        ></path>
                        <path
                            class="path"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke="black"
                            fill="black"
                            d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
                        ></path>
                    </svg>
                    <span class="text_button">View Profile</span>
                </button>
            </a>
        </div>
    )
}

export default GitVeiw
