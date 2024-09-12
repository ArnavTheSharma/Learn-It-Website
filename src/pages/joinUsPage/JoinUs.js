// JoinUs.js
import { Link, Outlet } from 'react-router-dom';

const JoinUs = () => {


    return (
        <div className="p-6 max-w-6xl mx-auto">

            {(<div>
                <h1 className="text-3xl font-bold text-center mb-6">Join Us</h1>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col">
                        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Learn It General Member Application</h2>
                                <p className="text-gray-700 mb-4">
                                    Welcome to Learn It, thank you for your interest! Please fill out this form to submit your application to join Learn It.
                                    <br /> <br /> P.S. You don’t have to fill it out more than once for any new webinars!
                                </p>
                            </div>
                            <Link
                                to={`/general-membership`}
                                className="text-blue-500 hover:underline mt-auto"
                            >
                                Apply for General Membership
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Volunteer Signup</h2>
                                <p className="text-gray-700 mb-4">
                                    Hello, thank you for your interest in volunteering with Learn It! Please take a few minutes to fill out the form below with our credentials and volunteer interests. Becoming a volunteer is a great way to give back to the community, and volunteering with Learn It will give you certified volunteer hours for NHS or any other community service requirements! We look forward to working with you!
                                    <br /> <br />P.S. YOU MUST BE A LEARN IT GENERAL MEMBER TO APPLY AS A VOLUNTEER.
                                </p>
                            </div>
                            <Link
                                to={`/volunteer-signup`}
                                className="text-blue-500 hover:underline mt-auto"
                            >
                                Sign Up to Volunteer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            )}
            <Outlet /> {/* This will render the nested routes */}
        </div>
    )
};

export default JoinUs;
