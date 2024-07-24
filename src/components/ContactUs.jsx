import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us mt-5 p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">
        Address: Springdale Public School, 123 Education Lane, Cityville, State,
        ZIP Code
      </p>
      <p className="mb-2">Phone: +1 (123) 456-7890</p>
      <p className="mb-4">Email: info@springdale.edu</p>
      <form className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-bold" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded"
            id="message"
            name="message"
            rows="4"
          ></textarea>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
