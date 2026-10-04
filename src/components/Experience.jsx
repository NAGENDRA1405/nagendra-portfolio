import { useEffect, useState } from "react";
import axios from "axios";

function Experience() {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://nagendra-portfolio-backend.onrender.com/api/experience/")
            .then((response) => {
                setExperiences(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching experience:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section
            id="experience"
            className="relative bg-[#0a0a0a] text-white px-6 md:px-10 py-28 border-t border-white/10 overflow-hidden"
        >
            <div className="absolute inset-0 portfolio-grid opacity-20"></div>

            <div className="relative max-w-[1400px] mx-auto">

                <div className="flex justify-between items-end mb-16">

                    <div>
                        <p className="text-violet-400 text-xs tracking-[0.25em] uppercase mb-4">
                            // Career
                        </p>

                        <h2 className="text-5xl md:text-7xl font-black">
                            EXPERIENCE
                        </h2>
                    </div>

                    <span className="hidden md:block text-7xl font-bold text-white/[0.05]">
                        05
                    </span>

                </div>

                {loading && (
                    <p className="text-gray-500">
                        Loading experience...
                    </p>
                )}

                {!loading && experiences.length === 0 && (
                    <p className="text-gray-500">
                        No experience records available.
                    </p>
                )}

                {!loading && experiences.length > 0 && (
                    <div className="border-t border-white/10">

                        {experiences.map((experience, index) => (
                            <div
                                key={experience.id}
                                className="grid lg:grid-cols-12 gap-6 py-10 border-b border-white/10 group hover:bg-white/[0.02] transition px-2"
                            >

                                <div className="lg:col-span-1">
                                    <span className="text-violet-400 text-xs">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <div className="lg:col-span-7">

                                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-cyan-400 transition">
                                        {experience.role}
                                    </h3>

                                    <p className="text-gray-400 mb-5">
                                        {experience.company}
                                    </p>

                                    <p className="text-gray-600 leading-7 max-w-2xl">
                                        {experience.description}
                                    </p>

                                </div>

                                <div className="lg:col-span-4 lg:text-right">

                                    <p className="text-gray-500 text-xs tracking-widest">
                                        {experience.period}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>
        </section>
    );
}

export default Experience;
