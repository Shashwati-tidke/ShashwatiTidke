import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 py-4 mt-10" 
    >

      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-3">

        {/* Name / Branding */}
        <h5 className="text-mds text-gray-100 tracking-wide">
          This site is developed by <span className="text-blue-500">Shashwati Tidke</span>
        </h5>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Shashwati-tidke"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/shashwati-tidke-82a557183/?originalSubdomain=in"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={22} />
          </a>


          <a
            href="mailto:shashwatitidke@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/10" />

        {/* Copyright */}
        <p className="text-sm text-gray-500" >
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
