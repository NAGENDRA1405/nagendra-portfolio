import { useEffect, useState } from "react";
import axios from "axios";

function Education() {
    const [education, setEducation] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://nagendra-portfolio-backend.onrender.com/api/education/")
            .then((response) => {
                setEducation(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching education:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section
            id="education"
            className="relative bg-[#0a0a0a] text-white px-6 md:px-10 py-28 border-t border-white/10 overflow-hidden"
        >
            <div className="absolute inset-0 portfolio-grid opacity-20"></div>

            <div className="relative max-w-[1400px] mx-auto">

                <div className="flex justify-between items-end mb-16">

                    <div>
                        <p className="text-violet-400 text-xs tracking-[0.25em] uppercase mb-4">
                            // Education
                        </p>

                        <h2 className="text-5xl md:text-7xl font-black">
                            EDUCATION
                        </h2>
                    </div>

                    <span className="hidden md:block text-7xl font-bold text-white/[0.05]">
                        06
                    </span>

                </div>

                {loading && (
                    <p className="text-gray-500">
                        Loading education...
                    </p>
                )}

                {!loading && education.length === 0 && (
                    <p className="text-gray-500">
                        No education records available.
                    </p>
                )}

                {!loading && education.length > 0 && (
                    <div className="grid lg:grid-cols-2 gap-3">

                        {education.map((item, index) => (
                            <div
                                key={item.id}
                                className="border border-white/10 p-8 md:p-10 hover:border-violet-500/40 transition"
                            >

                                <div className="flex justify-between mb-12">

                                    <span className="text-violet-400 text-xs">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-gray-600 text-xs">
                                        {item.period}
                                    </span>

                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                    {item.degree}
                                </h3>

                                <p className="text-cyan-400 mb-5">
                                    {item.field}
                                </p>

                                <p className="text-gray-400 mb-6">
                                    {item.institution}
                                </p>

                                <div className="border-t border-white/10 pt-5">
                                    <span className="text-gray-600 text-xs tracking-widest">
                                        {item.score}
                                    </span>
                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>
        </section>
    );
}

export default Education;
