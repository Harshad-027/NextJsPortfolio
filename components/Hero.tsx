"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { memo, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";

// Lazy load heavy components
const TextGenerateEffect = dynamic(() => import("./ui/TextGenEffect").then(mod => ({ default: mod.TextGenerateEffect })), {
  loading: () => <div className="h-16 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded" />,
  ssr: false
});

const HoverBorderGradient = dynamic(() => import("./ui/hoverBoarderGradient").then(mod => ({ default: mod.HoverBorderGradient })), {
  loading: () => <button className="px-6 py-2 rounded-full bg-gray-200 animate-pulse" />,
  ssr: false
});

const Hero = memo(() => {
  // Memoize static data
  const socialLinks = useMemo(() => [
    { Icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { Icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" }
  ], []);


  const handleDownloadResume = useCallback(() => {
    window.open('/resume.pdf', '_blank');
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden">
          <Image
            src="/profile.png"
            alt="Profile"
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
          />
        </div>
        <div className="space-y-4 animate-fadeIn">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Hi, I'm <span className="text-primary">Harshad</span>
          </h1>
          <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
            <TextGenerateEffect
              words="Full Stack Developer & DevOps Enthusiast"
              duration={0.3}
              filter={true} 
            />
          </div>
        </div>
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-2xl text-gray-600 hover:text-primary transition-colors duration-200"
              aria-label={label}
            >
              <Icon />
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            View Projects
          </Link>
          
          <Link
            href="/contact"
            className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-200"
          >
            Contact Me
          </Link>

          <HoverBorderGradient
            as="button"
            onClick={handleDownloadResume}
            className="px-6 py-3"
          >
            Download Resume
          </HoverBorderGradient>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
