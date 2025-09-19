import { Project } from "@/types";


export const projects: Project[] = [
    {
        title: 'Portfolio Website',
        description: 'A full-stack platform built with Next.js, TypeScript, and Tailwind CSS.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Various UI Libraries'],
        githubLink: 'https://github.com/Harshad-027/NextJsPortfolio',
        demoLink: 'https://next-js-portfolio-seven-kappa.vercel.app/',
        image: '/projects/portfolio.png',
      },
    {
        title: 'Auth Backend',
        description: 'A robust Auth Backend with industry level user management.',
        technologies: ['Node.js','Javascript', 'JWT', 'multer'] ,
        githubLink: '',
        demoLink: 'https://next-js-portfolio-seven-kappa.vercel.app/',
        image: '/projects/portfolio-website.jpg',
      },
    {
        title: 'Next TODO',
        description: 'Simple NextJS app to understand the NextJs framework.',
        technologies: ['Next.js','Toast Notifications'] ,
        githubLink: 'https://github.com/Harshad-027/nexttodo',
        demoLink: '',
        image: '/projects/NextTodo.png',
      },
  ];