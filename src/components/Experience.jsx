const Experience = () => {
    const experiences = [
        {
            role: "NetSuite Technical Intern",
            company: "Crowe",
            duration: "2 Feb 2026 - 2 Jul 2026",
            location: "",
            points: [
                "Working on NetSuite technical implementations and customizations.",
                "Supporting internal teams by building and maintaining scripts and workflows.",
                "Contributing to testing, debugging, and process improvements in NetSuite projects.",
            ],
        },
    ];

    return (
        <section
            id="experience"
            className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
        >
            <div className="absolute top-16 left-10 w-44 h-44 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-10 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent inline-block">
                        Experience
                    </h2>
                    <p className="text-gray-300 mt-4 text-sm md:text-base">
                        Professional roles and internships.
                    </p>
                </div>

                <div className="space-y-6 md:space-y-8">
                    {experiences.map((item, index) => (
                        <article
                            key={`${item.company}-${index}`}
                            className="bg-gray-900/60 border border-white/10 rounded-2xl p-5 md:p-7 shadow-lg"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                                        {item.role}
                                    </h3>
                                    <p className="text-purple-300 font-medium">
                                        {item.company}
                                    </p>
                                </div>
                                <div className="text-sm md:text-base text-gray-300">
                                    <p>{item.duration}</p>
                                    {item.location ? <p>{item.location}</p> : null}
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {item.points.map((point, pointIndex) => (
                                    <li
                                        key={pointIndex}
                                        className="text-gray-200 text-sm md:text-base flex items-start"
                                    >
                                        <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-pink-400 shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
