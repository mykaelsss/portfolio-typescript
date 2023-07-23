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
    title: "Finance Tracker",
    imgSrc: "project-imgs/Finance_Login.png",
    code: "https://github.com/mykaelsss/finance_app",
    projectLink: "http://44.211.125.99/",
    tech: ["Java", "SpringBoot", "MySQL", "JSP"],
    description:
      "A simple web application to track your daily expenses.",
    modalContent: (
      <>
        <p>
          Finance tracker was a web app that I created to allow anyone to keep track of their daily expenses
          in a simple way.
        </p>
        <p>
        For this project, I utilized a well-rounded tech stack to deliver a robust and efficient application.
        I employed JSP and Bootstrap to create an intuitive and visually appealing frontend, allowing users to interact with the platform seamlessly.
        On the backend, I leveraged Java and SpringBoot to develop a powerful and scalable infrastructure that handled complex business logic effectively.
        The database was implemented using MySQL, ensuring secure and reliable data storage and retrieval for the Finance Tracker application.
        </p>
        <p>
        As the full-stack developer of this project, I took on the crucial responsibility of ensuring seamless communication between the frontend, backend, and database.
        By carefully integrating the components, I facilitated a smooth user experience and efficient data handling.
        My role encompassed bridging the gap between the user interface and the backend functionality, guaranteeing a cohesive and well-functioning web application.
        </p>
        <p>
        For deploying the website, I opted for Amazon EC2 web services, which provided a stable and reliable platform.
        By utilizing Amazon EC2, I ensured a robust deployment environment, capable of handling various traffic loads and delivering consistent performance to users.
        This choice of web services allowed for easy scalability, efficient resource management, and enhanced overall reliability for the deployed website.
        </p>
        <p>
        Creating this project was an immensely enjoyable experience, and it served as a valuable learning opportunity.
        Throughout the development process, I acquired a wealth of knowledge and skills, enhancing my expertise as a full-stack developer.
        The project not only challenged me to apply my technical know-how but also instilled a sense of accomplishment upon its completion.
        </p>
      </>
    ),
  },
  {
    title: "LFG",
    imgSrc: "project-imgs/LFG_home_page.png",
    code: "https://github.com/mykaelsss/lfg_project",
    projectLink: "http://18.233.168.135/",
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
];
