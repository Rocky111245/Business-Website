import React, { useEffect, useRef, useState } from "react";

const TrustedBrandsSection = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === imageRef1.current && entry.isIntersecting) {
                        setIsVisible1(true);
                    }
                    if (entry.target === imageRef2.current && entry.isIntersecting) {
                        setTimeout(() => setIsVisible2(true), 300);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (imageRef1.current) observer.observe(imageRef1.current);
        if (imageRef2.current) observer.observe(imageRef2.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Trusted by Leading Healthcare Institutions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Partnering with world-renowned manufacturers to deliver excellence in medical technology
                    </p>
                </div>

                {/* Partner Logos with Scroll Animation */}
                <div className="flex flex-col items-center space-y-12">
                    {/* First Logo */}
                    <div
                        ref={imageRef1}
                        className={`w-full max-w-4xl bg-white rounded-2xl shadow-xl p-12 transform transition-all duration-1000 ${
                            isVisible1
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <img
                            src="https://ik.imagekit.io/emtbd/emt_images/images/Screenshot_2023-02-07_044037.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675773664532"
                            alt="Trusted Healthcare Partner"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Second Logo */}
                    <div
                        ref={imageRef2}
                        className={`w-full max-w-4xl bg-white rounded-2xl shadow-xl p-12 transform transition-all duration-1000 ${
                            isVisible2
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <img
                            src="https://ik.imagekit.io/emtbd/emt_images/images/topcon.png?updatedAt=1678505026033"
                            alt="Topcon Corporation Partner"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <a
                        href="/About_Us"
                        className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        View All Our Partners
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TrustedBrandsSection;