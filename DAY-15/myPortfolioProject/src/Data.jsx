import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-950" />,
    text: "Proficient in HTML and CSS for building responsive, visually appealing, and user-friendly web pages. Skilled in creating clean and semantic HTML structures, implementing advanced CSS features",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-950" />,
    text: "Skilled in JavaScript, with expertise in creating dynamic, interactive, and efficient web applications. Proficient in core JavaScript concepts such as DOM manipulation, asynchronous programming, event handling, and ES6+ features.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-950" />,
    text: "Proficient in React.js, with expertise in developing dynamic, component-based user interfaces and single-page applications (SPAs). Skilled in using React features like hooks, state management, and lifecycle methods to build scalable and maintainable code. Experienced in integrating APIs using Axios, managing global state with Context API or Redux, and optimizing application performance.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://plus.unsplash.com/premium_photo-1673002094103-b2657755f800?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8NGslMjB3YWxscGFwZXJzfGVufDB8fDB8fHww",
    url: "https://rakeshjakkula-rj.github.io/unsplash-images-ui/",
    github: "https://github.com/RakeshJakkula-RJ",
    title: "images-ui project",
    text: "Designed and developed an end-to-end React.js application to display images using the Unsplash Images API, eliminating the need for a database,Key features include a navbar, theme toggle, search bar, and interactive pages for error handling and user login,Demonstrated skills in API integration, React componentization, and modern UI development."

  },
  {
    id: nanoid(),
    img: "https://images.unsplash.com/photo-1560963689-b5682b6440f8?q=80&w=2596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://RakeshJakkula-RJ.github.io/cocktail-project/",
    github: "https://github.com/RakeshJakkula-RJ",
    title: "cocktail-website project",
    text: "Built a comprehensive Cocktail Explorer website using React.js with data fetched dynamically from the Cocktail API through Axios,Key Features : Search Bar: Enables users to search for cocktails (vodka, wine, beer, coolers, etc.) with detailed individual cocktail pages,Navbar: Provides seamless navigation across the site,Routing: Implemented dynamic routing using React Router for smooth navigation,Integrated API for real-time cocktail data with efficient search functionality,Deployed the project for optimal accessibility and performance."

  },
  {
    id: nanoid(),
    img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/RakeshJakkula-RJ",
    title: "Ultimate Store project using redux",
    text: "Building an e-commerce store website(in progress)",
  },
];
