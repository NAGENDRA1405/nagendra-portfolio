import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Contact() {
    return (
        <section
            id="contact"
            className="relative bg-[#0a0a0a] text-white px-6 md:px-10 py-28 border-t border-white/10 overflow-hidden"
        >
            <div className="absolute inset-0 portfolio-grid opacity-20"></div>

            <div className="relative max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="mb-20">

                    <p className="text-violet-400 text-xs tracking-[0.25em] uppercase mb-5">
                        // Contact
                    </p>

                    <h2 className="text-6xl md:text-8xl font-black tracking-tight">
                        LET'S TALK.
                    </h2>

                </div>

                <div className="grid lg:grid-cols-12 gap-10">

                    {/* Message */}
                    <div className="lg:col-span-7">

                        <p className="text-xl md:text-3xl text-gray-300 leading-relaxed max-w-3xl mb-10">
                            Have a project, opportunity or idea?
                            Let's build something useful together.
                        </p>

                        <a
                            href="mailto:nagendragudemane@gmail.com"
                            className="inline-flex bg-white text-black px-7 py-4 text-sm font-semibold hover:bg-violet-500 transition"
                        >
                            SEND ME AN EMAIL →
                        </a>

                    </div>

                    {/* Links */}
                    <div className="lg:col-span-5">

                        <div className="border-t border-white/10">

                            <a
                                href="https://github.com/NAGENDRA1405/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between py-6 border-b border-white/10 group"
                            >
                                <div className="flex items-center gap-4">
                                    <FaGithub className="text-xl" />

                                    <span className="text-sm">
                                        GITHUB
                                    </span>
                                </div>

                                <span className="text-gray-600 group-hover:text-cyan-400 transition">
                                    ↗
                                </span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/nagendra-gudemane-81663430b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between py-6 border-b border-white/10 group"
                            >
                                <div className="flex items-center gap-4">
                                    <FaLinkedin className="text-xl" />

                                    <span className="text-sm">
                                        LINKEDIN
                                    </span>
                                </div>

                                <span className="text-gray-600 group-hover:text-cyan-400 transition">
                                    ↗
                                </span>
                            </a>

                            <a
                                href="https://leetcode.com/u/nagendra1405/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between py-6 border-b border-white/10 group"
                            >
                                <div className="flex items-center gap-4">
                                    <SiLeetcode className="text-xl" />

                                    <span className="text-sm">
                                        LEETCODE
                                    </span>
                                </div>

                                <span className="text-gray-600 group-hover:text-cyan-400 transition">
                                    ↗
                                </span>
                            </a>

                            <a
                                href="mailto:nagendragudemane@gmail.com"
                                className="flex items-center justify-between py-6 border-b border-white/10 group"
                            >
                                <div className="flex items-center gap-4">
                                    <FaEnvelope className="text-xl" />

                                    <span className="text-sm">
                                        EMAIL
                                    </span>
                                </div>

                                <span className="text-gray-600 group-hover:text-cyan-400 transition">
                                    ↗
                                </span>
                            </a>

                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 mt-24 pt-8 flex flex-col md:flex-row justify-between gap-4">

                    <p className="text-[10px] tracking-[0.2em] text-gray-600">
                        © 2026 NAGENDRA G
                    </p>

                    <p className="text-[10px] tracking-[0.2em] text-gray-600">
                        BUILT WITH REACT + TAILWIND + DJANGO
                    </p>

                </div>

            </div>
        </section>
    );
}

export default Contact;