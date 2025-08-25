import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';


const ContactForm = () => {
	const [status, setStatus] = useState("");
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setStatus("");
		setError(false);
		setLoading(true);

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				e.target,
				import.meta.env.VITE_EMAILJS_USER_ID
			)
			.then(
				(result) => {
					setStatus("Message sent successfully!");
					setLoading(false);
				},
				(error) => {
					setStatus("Failed to send message. Please try again.");
					setError(true);
					setLoading(false);
				}
			);
		e.target.reset();
	};

	return (
		<motion.div
			whileInView={{ opacity: 1, y: 0 }}
			initial={{ opacity: 0, y: 100 }}
			transition={{ duration: 0.8 }}
			className="w-full max-w-xl mx-auto p-8 bg-gradient-to-br from-[#23234d] via-[#18181b] to-[#23234d] border border-[#4245c4] shadow-2xl rounded-2xl mt-0 flex-1 relative overflow-hidden"
		>
			<h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#fff] via-[#b3b3d1] to-[#4245c4] bg-clip-text text-transparent drop-shadow-lg">
				Contact Me
			</h2>
			<form onSubmit={sendEmail} className="flex flex-col gap-5">
				<label htmlFor="name" className="sr-only">Name</label>
				<input
					id="name"
					type="text"
					name="name"
					placeholder="Your name"
					required
					className="p-3 border border-[#4245c4] bg-[#18181b] text-white focus:border-[#23234d] focus:outline-none rounded-lg text-lg placeholder:text-stone-400 transition"
					autoComplete="name"
				/>
				<label htmlFor="email" className="sr-only">Email</label>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="Your email"
					required
					className="p-3 border border-[#4245c4] bg-[#18181b] text-white focus:border-[#23234d] focus:outline-none rounded-lg text-lg placeholder:text-stone-400 transition"
					autoComplete="email"
				/>
				<label htmlFor="message" className="sr-only">Message</label>
				<textarea
					id="message"
					name="message"
					placeholder="Your message"
					required
					className="p-3 border border-[#4245c4] bg-[#18181b] text-white focus:border-[#23234d] focus:outline-none rounded-lg text-lg placeholder:text-stone-400 transition h-36 resize-none scrollbar-thin scrollbar-thumb-[#4245c4] scrollbar-track-[#23234d]"
				></textarea>
				<button
					type="submit"
					className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#4245c4] to-[#23234d] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-[#23234d] hover:to-[#4245c4] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#4245c4]/50 text-lg tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
					disabled={loading}
					aria-busy={loading}
				>
					{loading ? (
						<svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
							<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
						</svg>
					) : (
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25V6.75A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75v10.5A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25v-1.5M16.5 12l-4.5 4.5m0 0l-4.5-4.5m4.5 4.5V6.75" />
						</svg>
					)}
					{loading ? "Sending..." : "Send"}
				</button>
				{status && (
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className={`text-base text-center font-medium mt-2 ${error ? "text-red-500" : "text-green-400"}`}
						role={error ? "alert" : "status"}
					>
						{status}
					</motion.p>
				)}
			</form>
			{/* Decorative Blur Circles */}
			<div className="absolute -top-10 -left-10 w-40 h-40 bg-[#4245c4]/30 rounded-full blur-2xl -z-10 animate-pulse" />
			<div className="absolute -bottom-10 -right-10 w-56 h-56 bg-[#23234d]/40 rounded-full blur-2xl -z-10 animate-pulse" />
		</motion.div>
	);
};

export default ContactForm;
