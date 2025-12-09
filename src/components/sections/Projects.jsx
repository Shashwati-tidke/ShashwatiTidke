import { RevealOnScroll } from '../RevealOnScroll';


export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-8">

            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >


                        {/* Project Cards */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:bg-blue-500/25 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Quono – Catchy Phrases Recommender</h3>
                            <p className="text-gray-400 mb-4"> Built a deep-learning system that extracts features from images and generates
                                catchy, context-aware phrases using NLP techniques. Led a team of four and
                                managed full model–to–frontend pipeline. </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Deep Learning", "NLP", "Python", "Web App"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 text-center px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Add more project cards as needed */}

                        {/* Project Cards */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:bg-blue-500/25 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">    Mood-Based Song Recommendation System
                            </h3>
                            <p className="text-gray-400 mb-4"> Developed a facial-emotion-driven music recommender using Python and Spotipy API.
                                Published work at Human Work Interaction Design 2021 (Beijing – Virtual). </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Emotion Detection", "Spotipy API", "Machine Learning"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 text-center px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>



                            <a
                                href="https://ifip.hal.science/hal-03771292/"
                                target="_blank"
                                className="flex items-center mt-6 gap-2 text-blue-300 hover:text-blue-400 underline-offset-2 hover:underline transition-colors"
                            >
                                <svg
                                    className="w-6 h-6 text-blue-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="5" y="3" width="14" height="18" rx="2" ry="2" />
                                    <path d="M15 3v4a1 1 0 0 0 1 1h3" />
                                    <line x1="8" y1="11" x2="16" y2="11" />
                                    <line x1="8" y1="14" x2="16" y2="14" />
                                    <line x1="8" y1="17" x2="13" y2="17" />
                                </svg>
                                Publication
                            </a>






                        </div>



                        {/* Add more project cards as needed */}

                        {/* Project Cards */}

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:bg-blue-500/25 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Multiprogramming Operating System</h3>
                            <p className="text-gray-400 mb-4"> Designed and implemented a simulated multiprogramming OS using C++, requiring
                                deep understanding of assembly-level execution and system resource handling. </p>

                            {["C++", "Operating Systems", "Assembly Concepts"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 text-center px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}

                            {/* GitHub Button */}
                            <a
                                href="https://github.com/Shashwati-tidke/MOS/tree/main"
                                target="_blank"
                                className="flex items-center mt-6 gap-2 text-blue-300 hover:text-blue-400 underline-offset-2 hover:underline transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.2.9.1-.7.4-1.1.7-1.4-2.5-.3-5.2-1.3-5.2-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 2 1.2 3.2 0 4.6-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A10.9 10.9 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                                </svg>
                                GitHub
                            </a>

                        </div>
                        {/* Add more project cards as needed */}
                    </div>


                </div>
            </RevealOnScroll>
        </section >
    );
};