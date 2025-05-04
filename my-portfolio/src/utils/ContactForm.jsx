import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const ContactForm = () => {
	const [status, setStatus] = useState('');
	const [error, setError] = useState(false);
	

	const sendEmail = (e) => {
		e.preventDefault();
		setStatus('Sending...');
		console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
		console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
		console.log(import.meta.env.VITE_EMAILJS_USER_ID);

		emailjs.sendForm(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			e.target,
			import.meta.env.VITE_EMAILJS_USER_ID,
		).then(
			(result) => {
				setStatus('Message sent successfully!');
			},
			(error) => {
				setStatus('Failed to send message. Please try again.');
				setError(true);
			}
		);

		e.target.reset();
	};

	return (
		<motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1 }}
			className="max-w-lg mx-auto p-6 bg-transparent border border-stone-800 shadow-md rounded-lg mt-0 mb-20">
			<h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
			<form onSubmit={sendEmail} className="flex flex-col gap-4">
				<input
					type="text"
					name="name"
					placeholder="Your name"
					required
					className="p-2 border border-stone-800 focus:border-blue-900 focus:outline-none rounded"
				/>
				<input
					type="email"
					name="email"
					placeholder="Your email"
					required
					className="p-2 border border-stone-800 focus:border-blue-900 focus:outline-none rounded"
				/>
				<textarea
					name="message"
					placeholder="Your message"
					required
					className="p-2 border border-stone-800 focus:border-blue-900 focus:outline-none rounded h-32 scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-stone-800"
					// className="p-2 border border-stone-800 focus:border-blue-900 focus:outline-none rounded h-32"
				></textarea>
				<button
					type="submit"
					className="bg-[#4f6daf] text-white py-2 px-4 rounded hover:bg-[#2e31b8] transition duration-300"
				>
					Send
				</button>
				{status && (
  					<p className={`text-sm text-center ${error ? 'text-red-700' : 'text-gray-600'}`}>
    					{status}
  					</p>
				)}
			</form>
		</motion.div>
	);
};

export default ContactForm;
