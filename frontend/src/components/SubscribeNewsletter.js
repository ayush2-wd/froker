import React, { useState } from 'react';
import axios from 'axios';
import froker from "../img/FrokerAssest.png"
import thank from "../img/thank.jpg"

const formUrl = 'https://script.google.com/macros/s/AKfycbx5lBfuMixeMQYdZYR7IbSDyaYwwGiH0Dfp8vN3AKNmLyp9dEni9tLz12mFTQn-WG8qAQ/exec';

export default function SubscribeNewsletter() {
  const [formData, setFormData] = useState({
    Email_ID: ''
  });

  const [submitText, setSubmitText] = useState('Subscribe');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const { Email_ID } = formData;
    setSubmitted(true);
    e.preventDefault();
    axios({
      method: 'get',
      url: `${formUrl}?&Email_ID=${encodeURIComponent(Email_ID)}`
    })
    .then((r) => r.data)
    .then((data) => {
      setSubmitText('Subscribed');
      setFormData({
        Email_ID: '',
        timestamp: new Date(),
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
    {submitted ? (
      <div className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto p-4 border border-gray-300 rounded-lg flex flex-col items-center bg-white">
        <div className="w-2/5 h-40 flex justify-center p-2">
          <img src={thank} alt='pic of blogs' className='object-contain w-full h-full'/>
        </div>
        <div className="w-11/12 flex flex-col items-center py-5">
          <h2 className="text-gray-700 text-2xl md:text-3xl font-bold text-center mb-2">Thank you for subscribing!</h2>
          <p className="text-gray-600 text-base md:text-lg text-center">
            You are now part of our community. Get ready to receive exciting updates, exclusive offers, and more directly to your inbox.
          </p>
        </div>
      </div>
    ) : (
      <div className="w-11/12 md:w-4/5 mx-auto p-4 border border-gray-300 rounded-lg flex flex-col md:flex-row bg-white">
        <div className="w-full md:w-1/3 flex justify-center items-center p-4">
          <img src={froker} className='w-full object-cover' alt='newsletter'/>
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-center p-4">
          <p className="text-gray-700 text-lg md:text-xl font-semibold mb-4">Subscribe to our newsletter to get the latest updates and news</p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex border border-gray-300 rounded-full overflow-hidden">
              <input
                type="email"
                name='Email_ID'
                value={formData.Email_ID}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border-none outline-none rounded-full"
                required
              />
              <button
                type='submit'
                className="w-1/3 bg-orange-500 text-white font-semibold text-sm flex justify-center items-center"
              >
                {submitText}
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
    </>
  );
}
