import { RevealOnScroll } from "../RevealOnScroll";
import { Award } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      title: "5th Rank – Meta Hacker Cup 2025 (Final Round, AI Track)",
      category: " Multiagent AI & Competitive Programming",
      date: "Dec 2025"
    },


    {
      title: "Received special appreciation for Business tool development",
      category: "Emerson Automation Solution",
      date: "Feb 2022",
    },
    {
      title: "1st place in Pune Zone for the Space App Challenge by NASA",
      category: "Rural Marketing",
      date: "Feb 2020",
    },
  ];

  return (
    <section
      id="achievements"
      className="flex items-center justify-center py-10 md:py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Award size={24} className="text-blue-400" />

                  <div className="flex-1">
                    <h3 className="text-gray-300 font-semibold text-lg leading-snug">
                      {achievement.title}
                    </h3>

                    <p className="text-blue-500 text-sm mt-2">
                      {achievement.category}
                    </p>

                    <p className="text-gray-400 text-sm">{achievement.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
