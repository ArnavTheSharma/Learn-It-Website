import './section3.css'
import { FaHandshake } from "react-icons/fa";
import { MdVolunteerActivism } from 'react-icons/md';
import { FcConferenceCall } from 'react-icons/fc';
import { useState } from 'react';
import CountUp from "react-countup";

const Section3 = () => {
    const [members,setMembers]=useState(1000)
    const [partners,setPartners]=useState(100)
    const [countries,setCountries]=useState(50)
    // let members = 1000;
    // let partners = 100;
    // let countries = 50;
    
    const handlePartnersClick=()=>{
        const target=document.getElementById('partners')
        target.scrollIntoView({behavior:'smooth'})
        // window.scrollTo()
    }

    // useCountUp({
    //     enableScrollSpy: true,
    //     scrollSpyDelay: 1000,
    //   });
    

    return ( 
        <div className="section3 flex justify-center items-center py-10">
            <div className=" flex justify-center items-center border-[.3em] sm:flex-row flex-row border-white flex-wrap sm:gap-x-0 gap-x-2">
                <div className="bg-[#cccccc] sm:p-20 p-12 flex justify-center items-center" onClick={()=>handlePartnersClick()}>
                        <div className='flex flex-col justify-center items-center'>
                            <FaHandshake className='rotate-90 text-red-400 w-full text-3xl' />
                            <p id="partners" className='text-4xl font-bold mr-0 my-2'>{<CountUp start={0} end={partners} duration={3} />}+</p>
                            <p className='text-sm font-bold mr-0'>NGO Partners</p>
                        </div>
                </div>
                <div className="bg-[#b9c2d2] sm:bg-white sm:p-20 p-12 flex justify-center items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <MdVolunteerActivism className=' text-red-400 w-full text-3xl' />
                        <p id="members" className='text-4xl font-bold mr-0 my-2'>{<CountUp start={0} end={members} duration={2.5} />}+</p>
                        
                        <p className='text-sm font-bold mr-0'>Members</p>
                    </div>
                </div>
                <div className="sm:bg-[#cccccc] bg-white sm:p-20 p-12 flex justify-center items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <FcConferenceCall className=' text-red-400 w-full text-3xl' />
                        <p id="countries" className='text-4xl font-bold mr-0 my-2'>{<CountUp start={0} end={countries} duration={3} />}+</p>
                        <p className='text-sm font-bold mr-0'>Countries</p>
                    </div>
                </div>
            </div>
            
        </div>
     );


    //  function counter(ObjectId, num) {
    //     document.getElementById("partners").innerHTML = num;
    //     for (let i=0; i<=num; i++) {
    //         document.getElementById("partners").innerHTML = i;
    //     }
    // }
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<counter />); 
export default Section3;
