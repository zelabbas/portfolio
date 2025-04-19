import project1 from "../src/assets/projects/project1.jpg";
import project2 from "../src/assets/projects/project2.avif";
import project3 from "../src/assets/projects/project3.jpeg";
import project4 from "../src/assets/projects/project4.png";

export const HERO_CONTENT = `Passionate Software Engineering Student & Full-Stack Developer I’m a dedicated at 1337 School student specializing in building scalable, efficient, and user-friendly web applications. Thriving in a project-based, intensive learning environment, I’ve honed my skills in modern development tools and frameworks. Committed to crafting memorable digital experiences, I continuously explore emerging technologies and best practices to grow as an adaptive and innovative engineer.`;

export const PROJECTS = [
  {
    title: "Chat Application",
    image: project1,
    github: 'https://github.com/zelabbas/Chat-App-with-React-Node.js-Socket.io',
    description:
      "A real-time chat application with features like private messaging, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js","socket.io" ,"MongoDB"],
  },  
  {
    title: "Web Server in C/C++",
    image: project2,  // Replace this with the image you want to use for the web server project
    github: 'https://github.com/zelabbas/Webserv_42',
    description:
      "A simple yet efficient web server implemented in C/C++, supporting HTTP requests and basic static file serving and videos.",
    technologies: ["C", "C++", "HTTP", "Sockets"],
  },
  {
    title: "NetPractice",
    image: project3,  // Replace with an appropriate image for this project
    github: 'https://github.com/zelabbas/Net_Practice',
    description:
      "A platform for solving networking problems and practicing networking concepts such as TCP/IP, OSI model, and other core networking topics.",
    technologies: ["TCP/IP", "OSI Model", "Networking Concepts"],
  },
  {
    title: "Inception - Dockerized Web Application",
    image: project4,  // Replace with the appropriate image for this project
    github: 'https://github.com/zelabbas/Inception',
    description:
      "The Inception project at 1337 School where I set up and containerized a complete web environment using Docker and Docker Compose. The project involved configuring services like WordPress, Nginx, MariaDB, Redis, FTP server, and Adminer with Docker networking and inter-container communication.",
    technologies: ["Docker", "Docker Compose", "Docker Networking", "WordPress", "Nginx", "MariaDB", "FTP", "Redis", "Adminer", "Containerization"],
  }
  
];

export const CONTACT = {
  address: "Casablanca, Morocco 🇲🇦",
  phoneNo: "+212 609-900-830",
  email: "sir.zelabbas@gmail.com",
};


