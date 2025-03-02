import React from 'react';
import ContactImage from '../assets/images/contacUs.png'; 

const Contact = () => {
  return (
    <section className="px-4 mx-auto max-w-screen-lg py-12">
      <h2 className="heading text-center mb-8">Contact Us</h2>
      <p className="mb-8 lg:mb-12 font-light text-center text_para">
        We're here to assist you! Feel free to reach out to us with any questions or inquiries. <br />
        Our team will get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Image */}
        <div className="lg:col-span-2 flex justify-center items-center">
          <img src={ContactImage} alt="Contact Us" className="w-full h-auto rounded-lg" />
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="form_label">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="form_input mt-1 "
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="form_label">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject,Let us know we can help you.."
                className="form_input mt-1 "
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="form_label">Your Message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="Write your message..."
                className="form_input mt-1 "
                required
              ></textarea>
            </div>

            <div>
              <button type="submit" className="w-full bg-primaryColor text-white p-3 rounded-md text-lg font-semibold hover:bg-primaryColorHover transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
