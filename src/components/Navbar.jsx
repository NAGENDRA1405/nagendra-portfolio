import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    const links = [
        { label: " HOME", href: "#home" },
        { label: " ABOUT", href: "#about" },
        { label: " WORK", href: "#projects" },
        { label: "EXPERIENCE", href: "#experience" },
        { label: " EDUCATION", href: "#education" },
        { label: "CERTS", href: "#certificates" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/85 backdrop-blur-md border-b border-white/10">

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="flex items-center gap-3"
                >
                    <span className="w-2.5 h-2.5 bg-violet-500 rounded-full"></span>

                    <span className="text-white font-bold tracking-wide text-lg">
                        NAGENDRA
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-7">
                    {links.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-[11px] tracking-wide transition ${
                                index === 0
                                    ? "text-white border-b border-violet-500 pb-2"
                                    : "text-gray-500 hover:text-white"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Contact */}
                <a
                    href="#contact"
                    className="hidden md:flex border border-white/20 px-5 py-3 text-xs tracking-wide text-white hover:border-violet-500 hover:text-cyan-400 transition"
                >
                    LET'S TALK ↗
                </a>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-2xl text-white"
                    aria-label="Toggle menu"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden border-t border-white/10 bg-[#0a0a0a]">
                    <div className="px-6 py-6 flex flex-col gap-5">

                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="text-xs tracking-wide text-gray-400 hover:text-cyan-400 transition"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="border border-violet-500 text-cyan-400 px-4 py-3 text-center text-xs"
                        >
                            LET'S TALK ↗
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;