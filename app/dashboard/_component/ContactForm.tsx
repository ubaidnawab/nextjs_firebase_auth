import { useState } from "react";
import { googleSheet } from "@/lib/google_sheet";

export default function ContacthtmlForm() {
  const [htmlFormData, sethtmlFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    dateOfContact: "",
    comment: "",
    followUpDate: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    sethtmlFormData({
      ...htmlFormData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(e.target, 'aaaaa submit');
    // Handle htmlForm submission here
    var form =  new FormData(e.target);
    const result = googleSheet(form);
    // console.log(form, 'form data here');
    
  };

  return (
    <form onSubmit={handleSubmit} method="post" action='' id="contactForm" name="contactForm">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={htmlFormData.name}
            onChange={handleChange}
            className="htmlForm-input text-black w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={htmlFormData.email}
            onChange={handleChange}
            className="htmlForm-input text-black w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={htmlFormData.phone}
            onChange={handleChange}
            className="htmlForm-input text-black w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your phone number"
            required
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-gray-700 font-bold mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={htmlFormData.company}
            onChange={handleChange}
            className="htmlForm-input text-black w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your company name"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="dateOfContact"
          className="block text-gray-700 font-bold mb-2"
        >
          Date of Contact
        </label>
        <input
          type="date"
          id="dateOfContact"
          name="dateOfContact"
          value={htmlFormData.dateOfContact}
          onChange={handleChange}
          className="htmlForm-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
          Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          value={htmlFormData.comment}
          onChange={handleChange}
          className="htmlForm-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          rows={4}
          placeholder="Enter your comment here"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="followUpDate"
          className="block text-gray-700 font-bold mb-2"
        >
          Follow-up Date
        </label>
        <input
          type="date"
          id="followUpDate"
          name="followUpDate"
          value={htmlFormData.followUpDate}
          onChange={handleChange}
          className="htmlForm-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="text-grey-700 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
