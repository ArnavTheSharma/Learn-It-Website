import React, { useState } from 'react';
import axios from 'axios';

const VolunteerSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    grade: '',
    country: '',
    school: '',
    interests: [],
    timeCommitment: '',
    grantSkills: '',
    questions: '',
  });

  // Handle changes to the form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle submission of the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const data = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        data.append(key, formData[key]);
      }
    }

    console.log(data)
    for (let [key, value] of data.entries()) {
        console.log(`${key}: ${value}`);
      }

    try {
      await axios.post('/api', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Form submitted successfully!');
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        grade: '',
        country: '',
        school: '',
        interests: [],
        timeCommitment: '',
        grantSkills: '',
        questions: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Volunteer Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-6 text-sm">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Grade Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="grade">What grade are you in?</label>
          <select
            name="grade"
            id="grade"
            value={formData.grade}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="">Select a grade</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
            <option value="9th">9th Freshman (High School)</option>
            <option value="10th">10th Sophomore (High School)</option>
            <option value="11th">11th Junior (High School)</option>
            <option value="12th">12th Senior (High School)</option>
          </select>
        </div>

        {/* Country Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="country">What country are you in?</label>
          <input
            type="text"
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* School Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="school">Name of School/University</label>
          <input
            type="text"
            name="school"
            id="school"
            value={formData.school}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Interests Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Which of the following volunteer opportunities are you interested in?</label>
          <div className="space-y-2">
            {['Social Media Volunteer', 'Outreach Volunteer', 'Communications Volunteer', 'Event Management Volunteer', 'Grant Applications Volunteer', 'Recruitment Volunteer', 'International Ambassador', 'other'].map((interest) => (
              <div key={interest} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="interests"
                  value={interest}
                  checked={formData.interests.includes(interest)}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData((prevState) => ({
                      ...prevState,
                      interests: e.target.checked
                        ? [...prevState.interests, value]
                        : prevState.interests.filter((item) => item !== value),
                    }));
                  }}
                  className="h-5 w-5 text-blue-500 border-gray-300 rounded"
                />
                <label className="text-gray-700">{interest}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Time Commitment Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="timeCommitment">How much time can you dedicate to our chosen volunteer position?</label>
          <select
            name="timeCommitment"
            id="timeCommitment"
            value={formData.timeCommitment}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          >
            <option value="">Select time commitment</option>
            <option value="1-2 hours a week">1-2 hours a week</option>
            <option value="3-5 hours a week">3-5 hours a week</option>
            <option value="> 5 hours a week"> 5 hours a week</option>
          </select>
        </div>

        {/* Grant Skills Field (Conditional) */}
        {formData.interests.includes('Grant Applications Volunteer') && (
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="grantSkills">What skills/passions do you have that will make you a good candidate for being a Grant Application Volunteer?</label>
            <textarea
              name="grantSkills"
              id="grantSkills"
              value={formData.grantSkills}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none"
            />
          </div>
        )}

        {/* Questions/Concerns Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="questions">Any Questions/Concerns/Feedback?</label>
          <textarea
            name="questions"
            id="questions"
            value={formData.questions}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerSignup;
