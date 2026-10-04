import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

function Home() {
    return (
        <section
            id="home"
            className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 portfolio-grid opacity-40 pointer-events-none"></div>

            {/* Main Container */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 pt-28 sm:pt-32 pb-12 sm:pb-16">

                {/* Top Meta */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">

                    <div className="flex items-center gap-3 text-[9px] sm:text-xs tracking-[0.18em] sm:tracking-[0.25em] text-gray-500">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>

                        AVAILABLE FOR OPPORTUNITIES
                    </div>

                    <div className="text-[9px] sm:text-xs tracking-[0.18em] sm:tracking-[0.25em] text-gray-500">
                        INDIA&nbsp;&nbsp;//&nbsp;&nbsp;2026
                    </div>

                </div>

                {/* Hero Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">

                    {/* LEFT */}
                    <div className="lg:col-span-7 w-full">

                        {/* Role */}
                        <p className="text-orange-500 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] mb-5 sm:mb-6">
                            SOFTWARE ENGINEER
                        </p>

                        {/* Name */}
                        <h1 className="hero-name max-w-full break-words">
                            NAGENDRA
                        </h1>

                        {/* Description */}
                        <div className="mt-8 sm:mt-10 max-w-2xl">

                            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                                Backend-focused software engineer building
                                scalable web applications, APIs and
                                AI-powered solutions.
                            </p>

                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-7 sm:mt-8">

                            {[
                                "PYTHON",
                                "DJANGO",
                                "REST APIs",
                                "MYSQL",
                                "REACT",
                                "AI",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="border border-white/10 px-3 sm:px-4 py-2 text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.18em] text-gray-400 hover:border-orange-500 hover:text-orange-400 transition"
                                >
                                    {skill}
                                </span>
                            ))}

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col xs:flex-row sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">

                            <a
                                href="#projects"
                                className="bg-orange-500 text-black px-6 sm:px-7 py-3.5 sm:py-4 text-[10px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.15em] text-center hover:bg-orange-400 transition"
                            >
                                VIEW WORK ↘
                            </a>

                            <a
                                href="/Nagendra_G_Combined_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white/20 px-6 sm:px-7 py-3.5 sm:py-4 text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.15em] text-white text-center hover:border-orange-500 hover:text-orange-400 transition"
                            >
                                ↓ &nbsp; RESUME
                            </a>

                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-6 mt-8 sm:mt-10">

                            <a
                                href="https://github.com/NAGENDRA1405/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-gray-500 hover:text-white transition text-xl"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/nagendra-gudemane-81663430b"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-gray-500 hover:text-[#0A66C2] transition text-xl"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://leetcode.com/u/nagendra1405/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LeetCode"
                                className="text-gray-500 hover:text-orange-400 transition"
                            >
                                <span className="font-bold text-sm">
                                    LC
                                </span>
                            </a>

                            <a
                                href="mailto:nagendragudemane@gmail.com"
                                aria-label="Email"
                                className="text-gray-500 hover:text-orange-400 transition text-xl"
                            >
                                <FaEnvelope />
                            </a>

                        </div>

                    </div>

                    {/* RIGHT — PROFILE PHOTO */}
                    <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">

                        <div className="relative w-full max-w-[380px] h-[420px] sm:h-[500px] lg:h-[540px] border border-white/10 overflow-hidden">

                            <img
                                src="/profile.png"
                                alt="Nagendra"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Cinematic Bottom Fade */}
                            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>

                        </div>

                    </div>

                </div>

                {/* Simple Bottom Line */}
                <div className="mt-14 sm:mt-20 pt-5 sm:pt-6 border-t border-white/10">

                    <div className="flex flex-col sm:flex-row justify-between gap-3 text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-gray-600">

                        <span>
                            BASED IN INDIA
                        </span>

                        <span>
                            BACKEND / AI / WEB
                        </span>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Home;