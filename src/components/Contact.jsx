import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const formRef = useRef();

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init("DO9l_PdQsidrEtOsB"); // Initialize with your public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message:
          "Please fill in all required fields (Name, Email, and Message).",
      });
      return;
    }

    setFormStatus({ submitted: true, success: false, message: "Sending..." });

    // Prepare the template parameters
    const templateParams = {
      from_name: formData.user_name,
      from_email: formData.user_email,
      to_name: "Harshit",
      phone: formData.phone || "Not provided",
      subject: formData.subject,
      message: formData.message,
    };

    // Send the email
    emailjs
      .send(
        "service_el7aac4", // Your service ID
        "template_ygvlqrm", // Your template ID
        templateParams
      )
      .then(
        () => {
          setFormStatus({
            submitted: true,
            success: true,
            message: "Message sent successfully!",
          });
          setFormData({
            user_name: "",
            user_email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setFormStatus({
            submitted: true,
            success: false,
            message: "Failed to send message. Please try again later.",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-5 gap-6 md:gap-8">
          {/* Contact Information - Stacks on mobile, side by side on larger screens */}
          <div className="md:col-span-2 space-y-4 md:space-y-6">
            <div className="bg-gray-800/30 p-4 md:p-5 rounded-lg border border-purple-500/30">
              <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-2 md:mb-3">
                Contact Information
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">
                Have a project in mind or just want to chat? I'm always open to
                discussing new opportunities and ideas!
              </p>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 md:h-5 md:w-5 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">
                      Email
                    </h4>
                    <a
                      href="mailto:harshitbudhraja0@gmail.com"
                      className="text-purple-300 hover:text-purple-400 transition-colors text-sm md:text-base break-all"
                    >
                      harshitbudhraja0@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 md:h-5 md:w-5 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">
                      Location
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base">
                      Greater Noida, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Full width on mobile, 3/5 width on larger screens */}
          <div className="md:col-span-3 bg-gray-800/40 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gray-700">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-3 md:space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block mb-1 font-medium text-sm md:text-base"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                  />
                </div>
                <div>
                  <label
                    htmlFor="user_email"
                    className="block mb-1 font-medium text-sm md:text-base"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-1 font-medium text-sm md:text-base"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-1 font-medium text-sm md:text-base"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 font-medium text-sm md:text-base"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 md:px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm md:text-base"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:opacity-90 transition-opacity text-sm md:text-base w-full md:w-auto"
                disabled={
                  formStatus.submitted && formStatus.message === "Sending..."
                }
              >
                {formStatus.message === "Sending..."
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {formStatus.submitted && formStatus.message && (
                <div
                  className={`mt-3 md:mt-4 p-2 md:p-3 rounded-lg text-sm md:text-base ${
                    formStatus.success
                      ? "bg-green-500/20 border border-green-500 text-green-300"
                      : "bg-red-500/20 border border-red-500 text-red-300"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
