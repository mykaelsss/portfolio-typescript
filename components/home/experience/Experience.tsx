import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Queen 3 Productions",
    position: "Front-End Developer",
    time: "Apr 2024 - Current",
    location: "Remote",
    description:
      `
      As a key contributor to the development of a dynamic social platform, I boosted team productivity by 50% through workflow optimization and the rapid resolution of over 300 feature and bug tickets, enabling accelerated project timelines and ensuring seamless platform performance. I developed a real-time chat feature that significantly boosted user engagement, driving a measurable increase in interactions among hundreds of active monthly users. Additionally, I delivered essential front-end features, including content uploads, subscription tools, and authentication services, which drove a 20% increase in user engagement by enhancing platform usability. To further improve content interaction, I designed image cropping and rotation tools, contributing to higher user satisfaction and retention. On the backend, I implemented dynamic APIs for automating database field creation, improving data management efficiency and enabling seamless user-data integration, which reduced manual effort and scaled platform capabilities. I also built front-end hooks and API integrations for a text editor service, enabling efficient large-text submissions and optimizing storage by offloading data to AWS S3, reducing database load and improving platform scalability. These contributions collectively ensured a robust, user-friendly, and scalable platform architecture.
      `

  },
];
