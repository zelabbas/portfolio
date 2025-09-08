
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import './NavbarMobile.css';

const navLinks = [
    { href: '#technologies', label: 'Technologies' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
];

const socials = [
    {
        href: 'https://www.linkedin.com/in/zelabbas',
        icon: <FaLinkedin />, label: 'LinkedIn',
    },
    {
        href: 'https://github.com/zelabbas',
        icon: <FaGithub />, label: 'GitHub',
    },
    {
        href: 'https://www.instagram.com/zelabbass',
        icon: <FaInstagram />, label: 'Instagram',
    },
];

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="w-full z-50">
            <div className="flex justify-between items-center py-6 px-4 md:px-8">
                {/* Logo */}
                <a className="flex items-center gap-2 group" href="/" aria-label="Home">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-14 h-14 rounded-full object-cover shadow-[0_0_20px_3px_#4245c4] group-hover:scale-110 transition-transform duration-300"
                    />
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex gap-8 items-center text-white font-semibold text-lg">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 rounded-xl hover:text-[#4245c4] hover:bg-white/10 transition-all duration-200 shadow-sm hover:shadow-[0_0_12px_2px_#4245c4] hover:scale-105"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop Socials */}
                <div className="hidden lg:flex gap-4 items-center ml-6">
                    {socials.map(s => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="text-white text-2xl p-2 rounded-full hover:text-[#4245c4] hover:bg-white/10 transition-all duration-200 hover:shadow-[0_0_9px_2px_#4245c4] hover:scale-110"
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden flex items-center justify-center text-white text-3xl p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#4245c4] transition-all duration-200"
                    aria-label="Open menu"
                    onClick={() => setMobileOpen(true)}
                >
                    <FaBars />
                </button>
            </div>

            {/* Mobile Overlay Menu */}
            {mobileOpen && (
                <div className="navbar-mobile-overlay">
                    <button
                        className="navbar-mobile-close"
                        aria-label="Close menu"
                        onClick={() => setMobileOpen(false)}
                    >
                        <FaTimes />
                    </button>
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-16 h-16 rounded-full object-cover shadow-[0_0_20px_3px_#4245c4] mb-4"
                    />
                    <div className="flex flex-col items-center mt-2">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="navbar-mobile-link"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="navbar-mobile-socials">
                        {socials.map(s => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="text-3xl hover:text-[#4245c4] transition-colors duration-200"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
