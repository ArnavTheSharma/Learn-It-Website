import './section3.css'
import { FaHandshake } from "react-icons/fa";
import { MdVolunteerActivism } from 'react-icons/md';
import { FcConferenceCall } from 'react-icons/fc';
import { useState } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

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



    return ( 
        <div className="section3 flex justify-center items-center py-10">
            <div className="flex justify-center items-center border-[.3em] sm:flex-row flex-row border-white flex-wrap gap-5">
                <div className="bg-[#34699d] sm:w-[150px] w-[100px] xl:w-[15vw] xl:py-[10vw] sm:p-auto p-5 sm:py-20 py-7 flex justify-center items-center md:border-4 rounded-md border-indigo-500" onClick={()=>handlePartnersClick()}>
                    <div className='flex flex-col justify-center items-center'>
                        <FaHandshake className='rotate-90 text-white w-full text-3xl' />
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                            <div>
                                {isVisible ? <p id="partners" className='sm:text-4x1 text-white font-bold mr-0 my-2'>{<CountUp start={0} end={partners} duration={3} />}+</p> : <p id="partners" className='sm:text-4x1 text-white font-bold mr-0 my-2'>100+</p>}
                            </div>
                            )}
                        </VisibilitySensor>
                        <p className='text-sm text-white font-bold mr-0'>NGO Partners</p>
                    </div>
                </div>
                <div className="bg-[#AB912E] sm:w-[150px] w-[100px] xl:w-[15vw] sm:p-auto xl:py-[10vw] p-5 py-7 sm:py-20 flex justify-center rounded-md items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <MdVolunteerActivism className=' text-white w-full text-3xl' />
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                <div>
                                    {isVisible ? <p id="members" className='sm:text-4x1 text-white font-bold mr-0 my-2'>{<CountUp start={0} end={members} duration={2.5} />}+</p> : <p id="partners" className='sm:text-4x1 text-white font-bold mr-0 my-2'>1,000+</p>}
                                </div>
                                )}
                            </VisibilitySensor>
                        <p className='text-sm text-white font-bold mr-0'>Members</p>
                    </div>
                </div>
                <div className="bg-[#34699d] sm:w-[150px] w-[100px] xl:w-[15vw] xl:py-[10vw] sm:p-auto p-5 sm:py-20 py-7 flex justify-center rounded-md items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <FcConferenceCall className=' text-white w-full text-3xl' />
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                <div>
                                    {isVisible ? <p id="countries" className='sm:text-4x1 xl:text-8x1 text-white font-bold mr-0 my-2'>{<CountUp start={0} end={countries} duration={3} />}+</p> : <p id="partners" className='sm:text-4x1 xl:text-7x1 text-white font-bold mr-0 my-2'>50+</p>}
                                </div>
                                )}
                            </VisibilitySensor>
                        <p className='text-sm text-white font-bold mr-0'>Countries</p>
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
