import React from 'react';

const MissionVisionSection = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
            {/* Background Images */}
            <div className="absolute inset-0 flex">
                {/* Left Image */}
                <div className="w-1/2 relative">
                    <img
                        src="https://ik.imagekit.io/emtbd/emt_images/images/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673968937853"
                        alt="Our Values"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                </div>
                {/* Right Image */}
                <div className="w-1/2 relative">
                    <img
                        src="https://ik.imagekit.io/emtbd/emt_images/images/analysis-2030265.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673883338760"
                        alt="Mission & Vision"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                </div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-0">

                        {/* Our Values */}
                        <div className="bg-gradient-to-br from-primary-600/90 to-primary-700/90 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center min-h-[400px]">
                            <div className="text-white">
                                <h2 className="text-4xl font-bold mb-6">
                                    Our Values
                                </h2>
                                <p className="text-xl leading-relaxed text-blue-50">
                                    Excellence, Integrity, Quality, Affordability, Responsibility, and Reliability are our core values.
                                </p>
                            </div>
                        </div>

                        {/* Mission & Vision */}
                        <div className="bg-gradient-to-br from-secondary-100/95 to-cyan-100/95 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center min-h-[400px]">
                            <div>
                                <h2 className="text-4xl font-bold text-secondary-800 mb-6">
                                    Mission & Vision
                                </h2>
                                <div className="space-y-4 text-gray-800">
                                    <p className="text-lg leading-relaxed">
                                        <span className="font-semibold text-secondary-700">Our Mission</span> is to be the most reliable and committed business partner in the sale of quality medical equipment, providing responsive after sales service, and solutions to the needs of healthcare providers.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        <span className="font-semibold text-secondary-700">Our Vision</span> is to be the leading biomedical equipment distributor and seller in Bangladesh.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/30"></div>
        </section>
    );
};

export default MissionVisionSection;