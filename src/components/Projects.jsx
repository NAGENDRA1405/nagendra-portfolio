import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://nagendra-portfolio-backend.onrender.com/api/projects/")
            .then((response) => {
                setProjects(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section
            id="projects"
            className="relative bg-[#0a0a0a] text-white px-6 md:px-10 py-28 border-t border-white/10 overflow-hidden"
        >
            <div className="absolute inset-0 portfolio-grid opacity-20"></div>

            <div className="relative max-w-[1400px] mx-auto">

                <div className="flex justify-between items-end mb-16">

                    <div>
                        <p className="text-orange-500 text-xs tracking-[0.25em] uppercase mb-4">
                             Work
                        </p>

                        <h2 className="text-5xl md:text-7xl font-black">
                            SELECTED WORK
                        </h2>
                    </div>

                    <span className="hidden md:block text-7xl font-bold text-white/[0.05]">
                        04
                    </span>

                </div>

                {loading && (
                    <p className="text-gray-500">
                        Loading projects...
                    </p>
                )}

                {!loading && projects.length === 0 && (
                    <p className="text-gray-500">
                        No projects available.
                    </p>
                )}

                {!loading && projects.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-3">

                        {projects.map((project, index) => (
                            <article
                                key={project.id}
                                className="group border border-white/10 bg-white/[0.02] p-8 md:p-10 min-h-[350px] flex flex-col justify-between hover:border-orange-500/40 transition"
                            >

                                <div className="flex justify-between items-start">

                                    <span className="text-orange-500 text-xs tracking-widest">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-gray-700 text-xs">
                                        PROJECT
                                    </span>

                                </div>

                                <div>

                                    <h3 className="text-3xl md:text-4xl font-bold mb-5 group-hover:text-orange-400 transition">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-500 leading-7 max-w-xl mb-7">
                                        {project.description}
                                    </p>

                                    <div className="border-t border-white/10 pt-5 flex flex-wrap gap-2">
                                        {project.technologies
                                            .split(",")
                                            .map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="text-[10px] tracking-wide text-gray-500 border border-white/10 px-3 py-2"
                                                >
                                                    {technology.trim()}
                                                </span>
                                            ))}
                                    </div>

                                </div>

                                <div className="flex gap-5 mt-8">

                                    {project.github_url && (
                                        <a
                                            href={project.github_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-gray-500 hover:text-orange-400 transition"
                                        >
                                            GITHUB ↗
                                        </a>
                                    )}

                                    {project.live_url && (
                                        <a
                                            href={project.live_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-gray-500 hover:text-orange-400 transition"
                                        >
                                            LIVE DEMO ↗
                                        </a>
                                    )}

                                </div>

                            </article>
                        ))}

                    </div>
                )}

            </div>
        </section>
    );
}

export default Projects;
