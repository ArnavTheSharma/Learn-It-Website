import { FaPeopleGroup } from "react-icons/fa6";
import { GrNew } from "react-icons/gr";
import { MdOpenInNew, MdVolunteerActivism } from "react-icons/md";
import { PiMemberOf } from "react-icons/pi";

function JoinUs() {
    return (
        <div className="max-w-[1400px] w-[100%] h-[90%] flex flex-col justify-start items-center  mx-auto">
            <div className="flex justify-center items-center">
                <div className=" flex justify-center flex-col">
                    <h1>Join Us</h1>
                    <h4 className="text-center my-0">Want to make an impact in your community whilst improving that resumé?</h4>
                    <h4 className="text-center my-0">
                        Consider joining either our incredible team of volunteers or any position openings!
                    </h4>
                    <div className=" flex justify-center my-5">
                        <button type="button" className="rounded-full bg-[#314786] text-white text-lg w-[fit-content] border-none ">Volunteer Sign Up</button>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-between w-[90%] my-4">
                <div className="flex justify-center items-center flex-col bg-white px-6 py-3 h-full w-[24%]">
                    <FaPeopleGroup />
                    <h5 className="my-2">General member application form</h5>
                    <h5 className="font-light my-2 text-center">These hours will help you with NHS or another community service organization, 
                        these hours will count towards that as well</h5>
                </div>
                <div className="flex justify-center items-center flex-col bg-white px-6 py-3 h-full w-[24%]">
                    <MdVolunteerActivism />
                    <h5 className="my-2">Volunteer Sign up</h5>
                    <h5 className="font-light my-2 text-center">Want to make an impact in your community whilst improving that resumé? 
                        Consider joining either our incredible team of volunteers(and get certified volunteer hours!) or apply for any executive board position openings
                    </h5>
                </div>
                <div className="flex justify-center items-center flex-col bg-white px-6 py-3 h-full w-[24%]">
                    <MdOpenInNew />
                    <h5 className="my-2 text-center">New position openings</h5>
                    <h5 className="font-light my-2 mt-0 text-center">
                        <ul>
                            <li className="text-start my-1">International Relations Manager
                                ...</li>
                            <li className="text-start my-1">Social media co-manager...
                            </li>
                        </ul>
                    </h5>
                </div>
                <div className="flex justify-center items-center flex-col bg-white px-6 py-3 h-full w-[24%]">
                    <GrNew />
                    <h5 className="my-2 text-center">NEW Opportunity! Join our website rebranding team</h5>
                    <h5 className="font-light my-2 text-center">
                    We hope this message finds you well! We are thrilled to share that Learn It is embarking on an exciting project 
                    to remake our website, and we need your help.
                    </h5>
                </div>
            </div>
            
        </div>
    );
}


export default JoinUs;