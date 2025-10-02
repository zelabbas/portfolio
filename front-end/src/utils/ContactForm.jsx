
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
	const [status, setStatus] = useState("");
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = async (e) => {
	e.preventDefault();
	setStatus("");
	setError(false);
	setLoading(true);

	const name = e.target.name.value;
	const email = e.target.email.value;
	const message = e.target.message.value;

	if (!name || !email || !message) {
		setStatus("Please fill in all fields.");
		setError(true);
		setLoading(false);
		return;
	}

	console.log("Sending email with:", { name, email, message });

	try {
		const response = await fetch('https://portfolio-1twb.onrender.com/api/send-email', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, email, message }),
	});

	if (!response.ok) {
		setError(true);
		setStatus("Failed to send message. Please try again later.");
		setLoading(false);
		return;
	}
	} catch (err) {
		console.error("Error sending email:", err);
		setError(true);
		setStatus("An error occurred. Please try again later.");
		setLoading(false);
		return;
	}

	setStatus("Message sent successfully!");
	setLoading(false);

	e.target.reset();
};

	return (
		<motion.div
			whileInView={{ opacity: 1, y: 0 }}
			initial={{ opacity: 0, y: 100 }}
			transition={{ duration: 0.8 }}
			className="w-full max-w-xl mx-auto p-8 md:p-12 bg-white/10 backdrop-blur-md border border-[#4245c4]/30 shadow-2xl rounded-2xl mt-0 flex-1 relative overflow-hidden"
		>
			{/* Decorative Blur Circles */}
			<div className="absolute -top-10 -left-10 w-40 h-40 bg-[#4245c4]/30 rounded-full blur-2xl -z-10 animate-pulse" />
			<div className="absolute -bottom-10 -right-10 w-56 h-56 bg-[#23234d]/40 rounded-full blur-2xl -z-10 animate-pulse" />

			<motion.h2
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 50 }}
				transition={{ duration: 0.6, delay: 0.1 }}
				className="text-3xl sm:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-white via-[#b3b3d1] to-[#4245c4] bg-clip-text text-transparent drop-shadow-lg"
			>
				Contact Me
			</motion.h2>

			<form onSubmit={sendEmail} className="flex flex-col gap-5">
				<label htmlFor="name" className="sr-only">Name</label>
				<input
					id="name"
					type="text"
					name="name"
					placeholder="Your name"
					required
					className="p-3 border border-[#4245c4]/40 bg-white/20 text-white focus:border-[#4245c4] focus:bg-[#23234d]/40 focus:outline-none rounded-lg text-lg placeholder:text-stone-400 transition shadow-sm"
					autoComplete="name"
				/>
				<label htmlFor="email" className="sr-only">Email</label>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="Your email"
					required
					className="p-3 border border-[#4245c4]/40 bg-white/20 text-white focus:border-[#4245c4] focus:bg-[#23234d]/40 focus:outline-none rounded-lg text-lg placeholder:text-stone-400 transition shadow-sm"
					autoComplete="email"
				/>
				<label htmlFor="message" className="sr-only">Message</label>
				<textarea
					id="message"
					name="message"
					placeholder="Your message"
					required
					className="p-3 border border-[#4245c4]/40 bg-white/20 text-white focus:border-[#4245c4] focus:bg-[#23234d]/40 focus:outline-none rounded-lg text-lg placeholder:text-stone-400 transition h-36 resize-none shadow-sm scrollbar-thin scrollbar-thumb-[#4245c4] scrollbar-track-[#23234d]"
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
						<FaPaperPlane className="w-6 h-6" />
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
		</motion.div>
	);
};

export default ContactForm;
