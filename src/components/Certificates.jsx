import { useEffect, useState } from "react";
import axios from "axios";

function Certificates() {
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://nagendra-portfolio-backend.onrender.com/api/certificates/")
            .then((response) => {
                setCertificates(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching certificates:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section
            id="certificates"
            className="relative bg-[#0a0a0a] text-white px-6 md:px-10 py-28 border-t border-white/10 overflow-hidden"
        >
            <div className="absolute inset-0 portfolio-grid opacity-20"></div>

            <div className="relative max-w-[1400px] mx-auto">

                <div className="flex justify-between items-end mb-16">

                    <div>
                        <p className="text-orange-500 text-xs tracking-[0.25em] uppercase mb-4">
                             Certifications
                        </p>

                        <h2 className="text-5xl md:text-7xl font-black">
                            CERTIFICATES
                        </h2>
                    </div>

                    <span className="hidden md:block text-7xl font-bold text-white/[0.05]">
                        07
                    </span>

                </div>

                {loading && (
                    <p className="text-gray-500">
                        Loading certificates...
                    </p>
                )}

                {!loading && certificates.length === 0 && (
                    <p className="text-gray-500">
                        No certificates available.
                    </p>
                )}

                {!loading && certificates.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-3">

                        {certificates.map((certificate, index) => (
                            <div
                                key={certificate.id}
                                className="border border-white/10 p-8 md:p-10 hover:border-orange-500/40 transition"
                            >

                                <div className="flex justify-between mb-12">

                                    <span className="text-orange-500 text-xs">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-gray-600 text-xs">
                                        {certificate.date}
                                    </span>

                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                    {certificate.title}
                                </h3>

                                <p className="text-orange-400 mb-5">
                                    {certificate.issuer}
                                </p>

                                <p className="text-gray-500 leading-7 mb-8">
                                    {certificate.description}
                                </p>

                                {certificate.certificate && (
                                    <a
                                        href={certificate.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex border border-orange-500 text-orange-400 px-5 py-3 text-xs hover:bg-orange-500 hover:text-black transition"
                                    >
                                        VIEW CERTIFICATE ↗
                                    </a>
                                )}

                            </div>
                        ))}

                    </div>
                )}

            </div>
        </section>
    );
}

export default Certificates;
