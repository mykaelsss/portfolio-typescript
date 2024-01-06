import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Endangered Animals",
    imgSrc: "project-imgs/Endangered_Home_Page.png",
    code: "https://github.com/mykaelsss/MERN-EndangeredAnimals-Deployment",
    projectLink: "http://34.226.140.242/",
    tech: ["React", "Node.JS",  "MaterialUI", "Express", "MongoDB", "Tailwind"],
    description:
      "Check out my awesome web app dedicated to endangered animals! It's my proudest project!",
    modalContent: (
      <>
        <p>
          Endangered Animals is a web app I created to spread awareness to a select amount
          of endangered animals in need of help.
        </p>
        <p>
        The project was crafted with a dynamic tech stack, combining the power of JavaScript, React, Tailwind, and MaterialUI for the frontend.
        On the backend, I utilized Node.JS and Express, creating a seamless experience.
        For data storage, MongoDB was the chosen database, ensuring a robust and efficient solution.
        </p>
        <p>
        To thoroughly test all aspects of my project, I employed Postman for comprehensive testing.
        This included testing the routes from the backend to the database and ensuring smooth communication between the frontend and backend components.
        </p>
        <p>
        As the full-stack developer for this project,
        I had the responsibility of creating and managing both the frontend and backend.
        Additionally, I oversaw the database management to ensure efficient data storage and retrieval.
        By handling all these aspects, I ensured a cohesive and successful development process for the project.
        </p>
        <p>
        Throughout the creation of this project, I devoted countless hours to extensive research on each animal species and carefully identified reputable organizations to support their welfare.
        My primary goal was to ensure the website's accuracy, making it a reliable resource for users.
        With a plethora of information available, I meticulously selected the most consistent answers for questions where multiple responses existed.
        This dedication to accuracy and reliability was at the forefront of the website's development, guaranteeing its credibility as a valuable platform for animal enthusiasts and conservationists alike.
        </p>
      </>
    ),
  },
  {
    title: "LFG",
    imgSrc: "project-imgs/LFG_home_page.png",
    code: "https://github.com/mykaelsss/lfg_project",
    projectLink: "http://3.90.37.67/",
    tech: ["Python", "Flask", "Bootstrap", "MySQL"],
    description:
      "A social network for gamers to find groups to play with.",
    modalContent: (
      <>
        <p>
          LFG is a web app where people can make posts to find people to play with. Anyone can pick the
          game they want to play and see who has recently made a post or create an account and make their
          own post.
        </p>
        <p>
        In this project, I employed a tech stack comprising of JavaScript and Bootstrap for the frontend, allowing for an interactive and visually appealing user interface.
        On the backend, Python with Flask provided a robust foundation for server-side logic, facilitating seamless communication with the database.
        Speaking of the database, MySQL was used to store and manage project data efficiently, ensuring data integrity.
        </p>
        <p>
        In my capacity as the full stack developer, I played a pivotal role in ensuring seamless communication between the frontend, backend, and database for this project.
        By meticulously orchestrating the integration process, I facilitated smooth data flow from the user interface to the backend functionalities and from there to the database.
        This cohesive approach resulted in a cohesive and efficient application that met all project requirements and provided a seamless user experience.
        </p>
        <p>
        I consider this project to be the most enjoyable one in my career, as it resonated with me on a personal level due to my passion for gaming.
        As a gamer myself, I felt a strong connection to the project, which fueled my enthusiasm and dedication throughout its development.
        I am extremely pleased with the final outcome, as it not only met all the objectives but also captured the essence of what makes gaming experiences so enjoyable.
        </p>
      </>
    ),
  },
  {
    title: "Wedding Site",
    imgSrc: "project-imgs/Wedding_SS.png",
    code: "https://github.com/mykaelsss/wed-typescript",
    projectLink: "https://wed-typescript-frontend.vercel.app/",
    tech: ["React", "Tailwind", "MongoDB", "Node.js", "Express", "Vercel"],
    description:
      "A web app created for my sisters wedding.",
    modalContent: (
      <>
        <p>
        This web application has been developed with the primary aim of providing individuals access to vital information effortlessly.
        It serves as a comprehensive platform enabling users not only to conveniently access all necessary information but also to seamlessly RSVP for events and effortlessly navigate through the registry.
        </p>
        <p>
        The project was skillfully developed using a versatile tech stack that brings together JavaScript, React, and Tailwind for the frontend.
        On the backend, I harnessed the capabilities of Node.JS and Express to establish a smooth and cohesive user experience.
        In terms of data storage, MongoDB was selected as the database, ensuring a reliable and high-performance solution.
        </p>
        <p>
        As the full stack developer, I held a central role in establishing flawless connectivity among the frontend, backend, and database components of this project.
        Through meticulous coordination of the integration process, I facilitated the seamless transition of data from the user interface to backend functions and subsequently to the database.
        This comprehensive approach yielded an efficient and unified application that not only fulfilled project criteria but also delivered an uninterrupted user experience.
        </p>
        <p>
          Throughout the creation of this project, I poured a wealth of passion into every aspect.
          My goal extended beyond merely fulfilling functional requirements; I aspired to craft a solution that resonated deeply with my vision while also becoming a source of delight for my sister.
          Witnessing the final outcome of this web application fills me with immense satisfaction.
          The successful culmination of this endeavor not only aligns with my original aspirations but also brings me a profound sense of joy knowing that I've created something meaningful for my sister.
          This experience has solidified my conviction in the power of technology to channel personal sentiments into tangible and functional creations, making the journey all the more rewarding.
        </p>
      </>
    ),
  },
  {
    title: "Cioso",
    imgSrc: "project-imgs/Cioso.png",
    code: "https://github.com/mykaelsss/CiosoNYC",
    projectLink: "https://ciosonyc.vercel.app/",
    tech: ["React", "Tailwind", "Sass", "Vercel"],
    description:
      "Collabarated with two FIT students to help bring there project to life.",
    modalContent: (
      <>
        <p>
        This website was created with the goal of taking my colleague's wireframe and bringing it to life as well as adding ideas and enhancing others.
        </p>
        <p>
        Combining TypeScript, React, Tailwind CSS, and Sass provides a powerful and flexible foundation for developing modern web applications.
        TypeScript ensures a robust and typed codebase, React facilitates the creation of dynamic user interfaces, Tailwind CSS streamlines styling with utility classes, and Sass enhances the styling capabilities with its features.
        This tech stack is popular for its ability to improve developer productivity, code maintainability, and overall project scalability.
        </p>
        <p>
        As the frontend developer, I played a pivotal role in ensuring seamless connectivity within the project's frontend components.
        By meticulously orchestrating the integration process, I facilitated the smooth flow of data from the user interface to backend functionalities and, ultimately, to the database.
        This holistic approach resulted in an efficient and cohesive frontend application. It not only met the project's requirements but also provided users with an uninterrupted and satisfying experience.
        </p>
        <p>
          Throughout the development of this project, I invested a significant amount of passion into every facet.
          My objective went beyond simply meeting functional requirements; I aimed to fashion a solution that resonated deeply with my vision and provided a source of joy for my colleagues.
          Observing the final outcome of this website fills me with immense satisfaction.
          The successful completion of this endeavor not only aligns with my initial aspirations but also brings me a profound sense of happiness, knowing that I've crafted something meaningful for my team members.
          This experience has strengthened my belief in the ability of technology to transform personal sentiments into tangible and functional creations, making the journey exceptionally rewarding.
        </p>
      </>
    ),
  },
];
