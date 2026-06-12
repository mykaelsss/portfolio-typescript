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
    title: "Research Foundation CUNY",
    position: "Teaching Assistant - Full-Stack Development Bootcamp",
    time: "Jun 2026 - Present",
    location: "New York, NY",
    description:
      `
     I debug student code in real time across the full curriculum — HTML/CSS, JavaScript, React, Node.js, Express, PostgreSQL, and REST API design — diagnosing root causes and explaining fixes rather than patching symptoms. I deliver targeted one-on-one and small-group instruction across four tracks (full-stack development, data science/visualization, networking, and systems & security), translating complex topics into practical, approachable explanations. I also guide student teams through a capstone project from planning to deployment, keeping groups aligned on milestones and unblocking technical challenges in real time.
      `
  },
  {
    title: "Social Content Platform (Confidential)",
    position: "Full-Stack Developer",
    time: "Apr 2024 - Jan 2026",
    location: "Remote",
    description:
      `
     I owned the platform-wide compliance system end-to-end — age verification, content policy enforcement, PostgreSQL schema design, cross-table migrations on live production data, REST APIs, and an admin dashboard — enabling the platform to meet regulatory requirements for legal operation. I architected and implemented a tiered subscription system expanding creators from a single subscription to up to 5 independently priced tiers, enabling content segmentation across audience budgets and reducing all-or-nothing purchasing decisions for subscribers. I integrated the Stream Chat SDK and built a custom monetized messaging UI enabling creators to set dynamic per-user messaging rates and per-media pricing, creating a revenue stream beyond the SDK's native capabilities. I also migrated the platform from Plyr.js to Video.js, resolving HLS playback failures affecting ~35% of videos and eliminating a critical seek bug that crashed the site under rapid input, standardizing cross-device video reliability.
      `
  },
  {
    title: "Self-Employed",
    position: "Freelance Full-Stack Developer",
    time: "2023 - 2024",
    location: "Remote",
    description:
      `
     I delivered 5+ consumer-facing web apps for small businesses using React, Next.js, and Tailwind CSS, managing the full lifecycle from client requirements to deployment. I also built a wedding RSVP platform in 4 days handling 200+ guest responses with real-time updates, demonstrating the ability to ship quality features rapidly.
      `
  },
];
