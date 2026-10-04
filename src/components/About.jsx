function About() {
    const facts = [
        {
            number: "01",
            title: "BACKEND",
            description:
                "Building APIs, authentication systems, database-driven applications and backend services with Python and Django.",
        },
        {
            number: "02",
            title: "DATA",
            description:
                "Working with SQL, data analysis and practical data-driven applications.",
        },
        {
            number: "03",
            title: "AI",
            description:
                "Exploring machine learning, computer vision and AI-powered software.",
        },
    ];

    return (
        <section
            id="about"
            className="relative bg-[#0a0a0a] text-white px-6 md:px-10 py-24 md:py-32 border-t border-white/10 overflow-hidden"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 portfolio-grid opacity-20 pointer-events-none"></div>

            <div className="relative max-w-[1400px] mx-auto">

                {/* ================= HEADER ================= */}
                <div className="flex justify-between items-end mb-14 md:mb-20">

                    <div>
                        <p className="text-violet-400 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4">
                            01 // ABOUT
                        </p>

                        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-[-0.05em] leading-none">
                            PROFILE
                        </h2>
                    </div>

                    <span className="hidden md:block text-[100px] leading-none font-black text-white/[0.04]">
                        01
                    </span>

                </div>

                {/* ================= MAIN CONTENT ================= */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* LEFT */}
                    <div className="lg:col-span-7 border-t border-white/10 pt-8">

                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 leading-relaxed max-w-4xl">
                            I'm a software developer with a background in
                            <span className="text-white font-medium">
                                {" "}Artificial Intelligence & Machine Learning
                            </span>,
                            focused on building practical software that solves
                            real-world problems.
                        </p>

                        <p className="text-gray-500 leading-8 max-w-3xl mt-8">
                            My primary focus is backend development using
                            Python and Django, with experience building REST
                            APIs, database-driven applications and full-stack
                            integrations. I also work with data, machine
                            learning and AI-powered applications, and enjoy
                            turning ideas into working software.
                        </p>

                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-5">

                        <div className="relative border border-white/10 p-7 md:p-9 hover:border-violet-500/40 transition duration-500">

                            {/* Small accent */}
                            <div className="absolute top-0 left-0 w-12 h-[2px] bg-violet-500"></div>

                            <p className="text-violet-400 text-[10px] tracking-[0.25em] mb-7">
                                CURRENT DIRECTION
                            </p>

                            <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                                Backend Engineering
                                <br />
                                <span className="text-gray-500">
                                    + AI Applications
                                </span>
                            </h3>

                            <p className="text-gray-500 leading-7 text-sm md:text-base">
                                Python, Django, REST APIs, SQL, React and
                                machine learning form the core of my current
                                development journey.
                            </p>

                        </div>

                    </div>

                </div>

                {/* ================= FACTS ================= */}
                <div className="grid md:grid-cols-3 gap-px bg-white/10 mt-16 md:mt-20 border border-white/10">

                    {facts.map((fact) => (
                        <div
                            key={fact.number}
                            className="group bg-[#0a0a0a] p-7 md:p-8 min-h-[250px] hover:bg-[#101010] transition duration-500"
                        >

                            <div className="flex justify-between items-start mb-12">

                                <span className="text-violet-400 text-xs tracking-widest">
                                    {fact.number}
                                </span>

                                <span className="text-gray-700 text-xs group-hover:text-violet-400 transition">
                                    ↗
                                </span>

                            </div>

                            <h3 className="text-xl font-bold tracking-wide mb-4 group-hover:text-cyan-400 transition">
                                {fact.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-7">
                                {fact.description}
                            </p>

                        </div>
                    ))}

                </div>

                {/* ================= BOTTOM LINE ================= */}
                <div className="flex flex-col md:flex-row justify-between gap-4 mt-10 pt-6 border-t border-white/10 text-[9px] md:text-[10px] tracking-[0.2em] text-gray-600">
                    <span>PYTHON // DJANGO // AI</span>
                    <span>BUILDING • LEARNING • SHIPPING</span>
                </div>

            </div>
        </section>
    );
}

export default About;