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
    title: "NDA",
    position: "Full-Stack Developer",
    time: "Apr 2024 - Current",
    location: "Remote",
    description:
      `
     As the primary engineer on an early-stage social content platform, I owned development end-to-end across frontend, backend, and infrastructure, delivering core systems from concept through production. I significantly increased team productivity (≈50%) by streamlining workflows and independently resolving 300+ feature and bug tickets, enabling faster iteration and more stable releases. I built essential user-facing features including content uploads, authentication flows, subscriptions, role-based access control, and rich media tools such as image cropping and rotation, resulting in a more intuitive and engaging user experience. To drive real-time interaction, I implemented a custom chat interface integrated with a third-party messaging service, tightly coupled with platform authentication and user profiles. On the backend, I designed scalable APIs and data workflows that automated dynamic database field creation, reduced manual overhead, and supported rapid product evolution. I also developed integrations for large-text editing and media handling, offloading storage to AWS S3 to reduce database load and improve scalability. Additionally, I engineered an automated video trailer generation pipeline using FFmpeg and delivered a comprehensive compliance and moderation system spanning database design, backend APIs, and an internal admin UI, ensuring platform trust, safety, and long-term maintainability.
      `

  },
];
