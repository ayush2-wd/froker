import React, { useState } from 'react';
import axios from 'axios';
import { RxCrossCircled } from 'react-icons/rx';
import froker from "../img/FrokerAssest.png"
import thank from "../img/thank.jpg"

const formUrl = 'https://script.google.com/macros/s/AKfycbx5lBfuMixeMQYdZYR7IbSDyaYwwGiH0Dfp8vN3AKNmLyp9dEni9tLz12mFTQn-WG8qAQ/exec';

export default function Popupnewsletter() {
  const [formData, setFormData] = useState({
    Email_ID: ''
  });
  const [submitText, setSubmitText] = useState('Subscribe');
  const [showPopup, setShowPopup] = useState(true);
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

  const handleClose = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900"
            >
              <RxCrossCircled className="text-2xl" />
            </button>
            {submitted ? (
              <div className="text-center">
                <img
                  src={thank}
                  className="w-32 h-32 mx-auto object-cover"
                  alt="Thank You"
                />
                <h2 className="text-2xl font-semibold mt-4">Thank you for subscribing!</h2>
                <p className="mt-2 text-gray-600">
                  You are now part of our community. Get ready to receive exciting updates,
                  exclusive offers, and more directly to your inbox.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <img
                  src={froker}
                  className="w-full h-40 object-cover rounded-md"
                  alt="Newsletter"
                />
                <h2 className="text-xl font-semibold mt-4">Stay tuned!</h2>
                <p className="mt-2 text-gray-600 text-center">
                  Subscribe to our Newsletter for Exclusive Updates, Tips, and More.
                </p>
                <form onSubmit={handleSubmit} className="w-full mt-4 flex flex-col items-center">
                  <div className="flex w-full max-w-md">
                    <input
                      type="email"
                      id='email'
                      name='Email_ID'
                      value={formData.Email_ID}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                    <button
                      type='submit'
                      className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
                    >
                      {submitText}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
