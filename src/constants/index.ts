export const links = {
  contactEmail: "ratul3089@gmail.com",
  sourceCode: "https://github.com/ibrahimarchive/interactive-3d-portfolio",
};

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 5,
    name: "Source Code",
    href: "https://github.com/ibrahimarchive/interactive-3d-portfolio",
  },
] as const;

export const clientReviews = [
  {
    id: 1,
    name: "Moses Harris",
    position: "Owner of BubzyCourier",
    img: "/assets/review3.png",
    review:
      "Very responsive and helpful. Ibrahim helped me identify the issues with my server and install and configure everything seamlessly. He transformed our outdated webhosting UI into a modern, user-friendly platform. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Pedro San",
    position: "Owner of EvoGsp",
    img: "/assets/review2.png",
    review:
      "Ibrahim's expertise in system administration is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our web speed have significantly increased since the launch. He's a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "Tiago Rosado",
    position: "Owner of Squat.Club",
    img: "/assets/review1.webp",
    review:
      "I can't say enough good things about Ibrahim. He was able to take our complex web requirements and assigned them into a seamless, functional web hosting panel. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Patsat",
    position: "Owner of Citoyliens.fr",
    img: "/assets/review4.png",
    review:
      "Ibrahim was a pleasure to work with. He understood our requirements perfectly and delivered a result that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
  },
] as const;

export const myProjects = [
  {
    title: "AestheticVale - EcommerceWebsite",
    desc: "Built as a modern and elegant eCommerce platform with WordPress, Aesthetic Vale is designed to deliver a seamless shopping experience with a focus on style, performance, and ease of use. Featuring a responsive design, intuitive navigation, secure checkout, and optimized performance.",
    subdesc:
      "The website provides customers with a smooth and enjoyable browsing experience across all devices while ensuring scalability and reliable content management.",
    href: "https://www.aestheticvale.com",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/wordpress.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Interactive 3d Portfolio Redesign",
    desc: "A complete redesign of a 3D portfolio focused on creating a more immersive, visually engaging experience through refined layouts, smooth animations, interactive elements, and a modern interface that highlights creativity, usability, and performance.",
    subdesc:
      "Designed to elevate personal branding with seamless interactions, bold aesthetics, and an intuitive user experience.",
    href: "https://www.example.com",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },

] as const;

export const workExperiences = [
  {
    id: 1,
    name: "Fiverr",
    pos: "System Administrator",
    duration: "2022 - 2025",
    title:
      "Handled system administration tasks on Fiverr, providing optimized server setups and technical solutions. Used strong skills to keep digital environments running smoothly for clients around the world.",
    icon: "/assets/fiverr.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "AmarHoster",
    pos: "Technical Staff",
    duration: "Jan 2023 - Oct 2024",
    title:
      "Managed server upgrades and domain configurations at Amar Hoster. Applied skills to resolve technical issues, maintaining reliable hosting and strong client satisfaction.",
    icon: "/assets/a.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Gunzilla Games",
    pos: "Beta Tester",
    duration: "2024 - 2025",
    title:
      "Beta tested battle royale Off The Grid, identified critical bugs, optimized performance, and provided actionable gameplay feedback.",
    icon: "/assets/gunzilla.svg",
    animation: "salute",
  },
] as const;

export const socialLinks = [
  {
    name: "GitHub",
    icon: "/assets/github.svg",
    url: "https://github.com/ibrahimarchive/",
  },
  {
    name: "LinkedIn",
    icon: "/assets/linkedin.svg",
    url: "https://www.linkedin.com/in/ibrahimchowdhurydev/",
  },
  {
    name: "Instagram",
    icon: "/assets/instagram.svg",
    url: "https://instagram.com",
  },
] as const;
