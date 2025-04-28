"use client";

import { useEffect, useState } from "react";
import { DownloadIcon } from "./Icons";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer";
  const typingSpeed = 100;
  const startDelay = 500;

  useEffect(() => {
    let timer;

    // Start typing after a delay
    const startTyping = setTimeout(() => {
      let i = 0;
      timer = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, typingSpeed);
    }, startDelay);

    return () => {
      clearTimeout(startTyping);
      clearInterval(timer);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900 dark:to-blue-900"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.1) 2%, transparent 0%)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-emerald-600 dark:text-emerald-400 font-medium text-2xl mb-3 animate-fade-in-up">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up animation-delay-150">
            Lidetu Amare
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-10 animate-fade-in-up animation-delay-300">
            <span>{typedText}</span>
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl mb-8 animate-fade-in-up animation-delay-450">
            I build responsive, user-friendly web applications with modern
            technologies. Passionate about creating elegant solutions to complex
            problems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="/LIDETU AMARE BIZUNEH CV.pdf"
              download
              className="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
