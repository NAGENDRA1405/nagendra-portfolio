import { useState } from "react";

import {
    FaPython,
    FaJs,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaDocker,
    FaDatabase,
} from "react-icons/fa";

import {
    SiDjango,
    SiFlask,
    SiTailwindcss,
    SiMysql,
    SiMongodb,
    SiRedis,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiTensorflow,
    SiOpencv,
} from "react-icons/si";

function Skills() {
    const [activeCategory, setActiveCategory] = useState("ALL");

    const skills = [
        {
            name: "Python",
            category: "LANGUAGES",
            icon: <FaPython />,
            color: "#3776AB",
        },
        {
            name: "JavaScript",
            category: "LANGUAGES",
            icon: <FaJs />,
            color: "#F7DF1E",
        },
        {
            name: "HTML5",
            category: "LANGUAGES",
            icon: <FaHtml5 />,
            color: "#E34F26",
        },
        {
            name: "CSS3",
            category: "LANGUAGES",
            icon: <FaCss3Alt />,
            color: "#1572B6",
        },
        {
            name: "Django",
            category: "FRAMEWORKS",
            icon: <SiDjango />,
            color: "#44B78B",
        },
        {
            name: "Flask",
            category: "FRAMEWORKS",
            icon: <SiFlask />,
            color: "#FFFFFF",
        },
        {
            name: "React",
            category: "FRAMEWORKS",
            icon: <FaReact />,
            color: "#61DAFB",
        },
        {
            name: "Tailwind CSS",
            category: "FRAMEWORKS",
            icon: <SiTailwindcss />,
            color: "#06B6D4",
        },
        {
            name: "MySQL",
            category: "DATABASES",
            icon: <SiMysql />,
            color: "#4479A1",
        },
        {
            name: "MongoDB",
            category: "DATABASES",
            icon: <SiMongodb />,
            color: "#47A248",
        },
        {
            name: "Redis",
            category: "DATABASES",
            icon: <SiRedis />,
            color: "#DC382D",
        },
        {
            name: "SQL",
            category: "DATABASES",
            icon: <FaDatabase />,
            color: "#F2911B",
        },
        {
            name: "Pandas",
            category: "DATA & AI",
            icon: <SiPandas />,
            color: "#E70488",
        },
        {
            name: "NumPy",
            category: "DATA & AI",
            icon: <SiNumpy />,
            color: "#4DABCF",
        },
        {
            name: "Scikit-learn",
            category: "DATA & AI",
            icon: <SiScikitlearn />,
            color: "#F7931E",
        },
        {
            name: "TensorFlow",
            category: "DATA & AI",
            icon: <SiTensorflow />,
            color: "#FF6F00",
        },
        {
            name: "OpenCV",
            category: "DATA & AI",
            icon: <SiOpencv />,
            color: "#5C3EE8",
        },
        {
            name: "Git",
            category: "TOOLS",
            icon: <FaGitAlt />,
            color: "#F05032",
        },
        {
            name: "GitHub",
            category: "TOOLS",
            icon: <FaGithub />,
            color: "#FFFFFF",
        },
        {
            name: "Docker",
            category: "TOOLS",
            icon: <FaDocker />,
            color: "#2496ED",
        },
    ];

    const categories = [
        "ALL",
        "LANGUAGES",
        "FRAMEWORKS",
        "DATABASES",
        "DATA & AI",
        "TOOLS",
    ];

    const filteredSkills =
        activeCategory === "ALL"
            ? skills
            : skills.filter(
                  (skill) => skill.category === activeCategory
              );

    return (
        <section
            id="skills"
            className="relative bg-[#0a0a0a] text-white px-6 md:px-10 py-28 border-t border-white/10 overflow-hidden"
        >
            <div className="absolute inset-0 portfolio-grid opacity-20"></div>

            <div className="relative max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

                    <div>
                        <p className="text-orange-500 text-xs tracking-[0.25em] uppercase mb-4">
                             Skills
                        </p>

                        <h2 className="text-5xl md:text-7xl font-black tracking-tight">
                            TOOLS & TECHNOLOGIES
                        </h2>
                    </div>

                    <p className="text-xs tracking-[0.2em] text-gray-600 uppercase">
                        TECH I WORK WITH
                    </p>

                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 border-y border-white/10 py-5 mb-8">

                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-3 text-[10px] tracking-wide transition ${
                                activeCategory === category
                                    ? "bg-orange-500 text-black"
                                    : "text-gray-500 hover:text-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}

                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">

                    {filteredSkills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group min-h-[150px] border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between hover:border-orange-500/50 hover:bg-white/[0.04] transition-all duration-300"
                        >

                            <div
                                className="text-5xl transition-transform duration-300 group-hover:scale-110"
                                style={{ color: skill.color }}
                            >
                                {skill.icon}
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-200">
                                    {skill.name}
                                </p>

                                <p className="text-[9px] tracking-[0.15em] text-gray-600 mt-2">
                                    {skill.category}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

                <div className="flex justify-between items-center mt-10">
                    <span className="text-[10px] tracking-[0.2em] text-gray-600 uppercase">
                        {filteredSkills.length} technologies
                    </span>

                    <span className="text-[10px] tracking-[0.2em] text-gray-600 uppercase">
                        ALWAYS LEARNING MORE
                    </span>
                </div>

            </div>
        </section>
    );
}

export default Skills;