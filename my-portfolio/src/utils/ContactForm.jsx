import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
	const [status, setStatus] = useState('');

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
				console.log(error);
			}
		);

		e.target.reset();
	};

	return (
		<div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-20 mb-20">
			<h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
			<form onSubmit={sendEmail} className="flex flex-col gap-4">
				<input
					type="text"
					name="name"
					placeholder="Your name"
					required
					className="p-2 border rounded"
				/>
				<input
					type="email"
					name="email"
					placeholder="Your email"
					required
					className="p-2 border rounded"
				/>
				<textarea
					name="message"
					placeholder="Your message"
					required
					className="p-2 border rounded h-32"
				></textarea>
				<button
					type="submit"
					className="bg-[#4245c4] text-white py-2 px-4 rounded hover:bg-[#2e31b8] transition duration-300"
				>
					Send
				</button>
				{status && <p className="text-sm text-center text-gray-600">{status}</p>}
			</form>
		</div>
	);
};

export default ContactForm;
