import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import profileImg from "../../assets/profile.jpg";
import resumePdf from "../../../public/resume.pdf";

export const Home = () => {
  // TEXT ROTATION WITH TYPING EFFECT
  const texts = [
    "a Programmer.",
    "a Developer.",
    "an Engineer.",
    "a Maths Enthusiast.",
    "a Physics Enthusiast.",
  ];

  const typingSpeed = 90;      // Typing speed per character
  const deletingSpeed = 40;    // Deleting speed per character
  const delayBetweenWords = 1200; // Pause before deleting

  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const current = loop % texts.length;
      const fullText = texts[current];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setSpeed(deletingSpeed);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setSpeed(typingSpeed);
      }

      if (!isDeleting && text === fullText) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoop(loop + 1);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loop]);

  return (
    <section
      id="home"
      className="pt-28 pb-12 md:pt-32 md:pb-20 flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-2 md:gap-3 items-center">
          
          {/* IMAGE LEFT */}
          <div className="hidden md:flex justify-center md:justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            />
          </div>

          {/* TEXT RIGHT */}
          <div className="text-left space-y-5">

            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Shashwati Tidke
            </h1>

            {/* TYPING ANIMATION */}
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              I'm <span className="text-blue-400">{text}</span>
              <span className="border-r-2 border-blue-400 ml-1 animate-pulse"></span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              I love building tech that solves real problems and makes life a little better. 
              I’m passionate about SDE, Machine Learning, and AI.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Outside of coding, I’m equally fascinated by Physics and Mathematics—they shape 
              the way I think and approach challenges.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-gray-300">
              <a href="mailto:shashwati@example.com" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M4 6h16v12H4z" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/shashwati"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.48 1 4.98 2.12 4.98 3.5ZM.22 8.02H4.7V24H.22V8.02ZM8.34 8.02h4.3v2.18h.06c.6-1.14 2.07-2.35 4.26-2.35 4.56 0 5.4 3 5.4 6.9V24h-4.48v-7.09c0-1.69-.03-3.86-2.35-3.86-2.35 0-2.71 1.83-2.71 3.74V24H8.34V8.02Z" />
                </svg>
              </a>

              <a
                href="https://github.com/shashwati"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.75-1.57-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.17 0 0 .97-.31 3.19 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.18-1.19 3.18-1.19.65 1.65.24 2.87.12 3.17.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.68.42.36.8 1.09.8 2.2 0 1.59-.01 2.86-.01 3.25 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Resume Button */}
            <div>
              <a
                href={resumePdf}
                download="Shashwati_Tidke_CV.pdf"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Download Resume
              </a>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
