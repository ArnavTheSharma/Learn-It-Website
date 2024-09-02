import { FaHandshake } from 'react-icons/fa6';
import './section3.css'
import { MdVolunteerActivism } from 'react-icons/md';
import { FcConferenceCall } from 'react-icons/fc';
import { useState } from 'react';
const Section3 = () => {
    const [volunteers,setVolunteers]=useState(50)
    const [partners,setPartners]=useState(23)
    const [webinars,setWebinars]=useState(13)
    const handlePartnersClick=()=>{
        const target=document.getElementById('partners')
        target.scrollIntoView({behavior:'smooth'})
        // window.scrollTo()
    }
    return ( 
        <div className="section3 flex justify-center items-center py-10">
            <div className=" flex justify-center items-center border-[.3em] sm:flex-row flex-col border-white">
                <div className="bg-[#b9c2d2] sm:p-20 p-12 flex justify-center items-center" onClick={()=>handlePartnersClick()}>
                        <div className='flex flex-col justify-center items-center'>
                            <FaHandshake className='rotate-90 text-red-300 w-full text-3xl' />
                            <p className='text-4xl font-bold mr-0 my-2'>{partners}</p>
                            <p className='text-sm font-bold mr-0'>Partners</p>
                        </div>
                </div>
                <div className="bg-white sm:p-20 p-12 flex justify-center items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <MdVolunteerActivism className=' text-red-300 w-full text-3xl' />
                        <p className='text-4xl font-bold mr-0 my-2'>{volunteers}</p>
                        <p className='text-sm font-bold mr-0'>Volunteers</p>
                    </div>
                </div>
                <div className="bg-[#b9c2d2] sm:p-20 p-12 flex justify-center items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <FcConferenceCall className=' text-red-300 w-full text-3xl' />
                        <p className='text-4xl font-bold mr-0 my-2'>{webinars}</p>
                        <p className='text-sm font-bold mr-0'>Webinars</p>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Section3;