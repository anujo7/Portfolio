import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_0gbm0w8';
const TEMPLATE_ID = 'template_78xs4ta'; // <-- Replace with your EmailJS template ID
const PUBLIC_KEY = 'Wd-PISMI-8NfFzuzH';   // <-- Replace with your EmailJS public key

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', number: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return; // Prevent multiple submissions
    setError(null);
    setLoading(true);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch(() => {
        setError('There was an error sending your message. Please try again later.');
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-8 max-w-xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">Contact Me</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10">I'd love to hear from you! Fill out the form below and I'll get back to you soon.</p>
        {submitted ? (
          <div className="bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 p-6 rounded-lg text-center border border-teal-100 dark:border-teal-800 shadow-md">
            Thank you for reaching out! I will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 space-y-6">
            {error && (
              <div className="bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 p-3 rounded-lg text-center border border-amber-100 dark:border-amber-800 mb-4">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-500 transition-all shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-500 transition-all shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="number" className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">Phone Number</label>
              <input
                type="tel"
                id="number"
                name="number"
                value={form.number}
                onChange={handleChange}
                required
                placeholder="Your Phone Number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-500 transition-all shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Type your message here..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-500 transition-all shadow-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;