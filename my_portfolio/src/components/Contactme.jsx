import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = "Full Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";
    if (!formData.termsAccepted) tempErrors.termsAccepted = "You must accept the terms";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .sendForm('service_w73j81q', 'template_vutg1nq', e.target, '639FLIX_PyuhqP-PJ')
        .then(
          (result) => {
            console.log(result.text);
            setIsSubmitted(true);
            // Clear the form after submission and reset state
            setFormData({
              fullName: '',
              email: '',
              subject: '',
              message: '',
              termsAccepted: false,
            });
            window.location.reload(); // Refresh page after successful submission
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className="bg-gray-300 py-10">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-gray-500 text-5xl font-serif font-bold mb-2">CONTACT ME</h2>
        <p className="text-blue-500 text-3xl font-bold">
          Let's <span className="font-semibold text-black">Talk About Ideas</span>
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        <div className="space-y-8">
          <div>
            <h3 className="text-black text-2xl font-bold">Address</h3>
            <p className="text-gray-600">Nigeria</p>
          </div>
          <div>
            <h3 className="text-black text-2xl font-bold">Remote & Ready to Relocate</h3>
            <p className="text-gray-600">Available Right Now</p>
          </div>
          <div>
            <h3 className="text-black text-2xl font-bold">Email</h3>
            <p className="text-gray-600">ndukaubangozi@gmail.com</p>
          </div>
          <div>
            <h3 className="text-black text-2xl font-bold">Phone</h3>
            <p className="text-gray-600">+234 906 551 6600</p>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-black text-lg font-sans mb-2 block">YOUR FULL NAME</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Full Name"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>
            <div>
              <label className="text-black text-lg font-sans mb-2 block">YOUR EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Email Address"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="text-black text-lg font-sans mb-2 block">YOUR SUBJECT</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Subject"
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>

          <div>
            <label className="text-black text-lg font-sans mb-2 block">YOUR MESSAGE</label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Message"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <p className="text-sm text-gray-600">Accept the terms and conditions</p>
          </div>
          {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-md"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
