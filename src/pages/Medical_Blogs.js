import React from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { FaNewspaper, FaCalendar, FaClock } from "react-icons/fa";

function Medical_Blogs() {
    // Placeholder blog data - replace with actual content
    const blogs = [
        {
            id: 1,
            title: "Latest Advances in Ophthalmology Equipment",
            excerpt: "Discover the cutting-edge technology revolutionizing eye care and treatment...",
            date: "2024-11-01",
            readTime: "5 min read",
            category: "Ophthalmology",
            image: "https://ik.imagekit.io/emtbd/emt_images/images/topcon.png?updatedAt=1678505026033"
        },
        {
            id: 2,
            title: "The Future of Neonatal Care Equipment",
            excerpt: "How modern technology is improving outcomes for premature and critically ill infants...",
            date: "2024-10-28",
            readTime: "7 min read",
            category: "Neonatal Care",
            image: "https://ik.imagekit.io/emtbd/emt_images/images/analysis-2030265.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673883338760"
        },
        {
            id: 3,
            title: "Nephrology: Innovations in Dialysis Technology",
            excerpt: "Exploring the latest developments in kidney care and dialysis equipment...",
            date: "2024-10-25",
            readTime: "6 min read",
            category: "Nephrology",
            image: "https://ik.imagekit.io/emtbd/emt_images/images/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673968937853"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <WhatsAppIcon />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
                <div className="section-container">
                    <div className="flex items-center justify-center mb-6">
                        <FaNewspaper className="text-5xl mr-4" />
                        <h1 className="text-4xl md:text-5xl font-bold">Medical Insights & Updates</h1>
                    </div>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
                        Stay informed about the latest developments in medical technology and healthcare equipment
                    </p>
                </div>
            </div>

            {/* Coming Soon Notice */}
            <div className="section-container py-12">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-12 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaNewspaper className="text-white text-4xl" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Blog Section Coming Soon
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            We're working on bringing you valuable insights, industry updates, and expert perspectives on medical technology. Check back soon!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/Products"
                                className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                Explore Our Products
                            </a>
                            <a
                                href="/Contact_Us"
                                className="inline-block bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preview Section - Placeholder for future blogs */}
            <div className="section-container pb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        What to Expect
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our upcoming blog will feature articles on the latest medical equipment trends and insights
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-75"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden bg-gray-200">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Category Badge */}
                                <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {blog.category}
                </span>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                                    {blog.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {blog.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center text-sm text-gray-500 space-x-4">
                                    <div className="flex items-center">
                                        <FaCalendar className="mr-2" />
                                        <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaClock className="mr-2" />
                                        <span>{blog.readTime}</span>
                                    </div>
                                </div>

                                {/* Coming Soon Overlay */}
                                <div className="mt-4 text-center">
                  <span className="inline-block bg-gray-100 text-gray-500 text-sm font-medium px-4 py-2 rounded-lg">
                    Coming Soon
                  </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter Signup Section */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16">
                <div className="section-container">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Be the first to know when we publish new articles and insights. Subscribe to our newsletter!
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-sm text-gray-500 mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Medical_Blogs;