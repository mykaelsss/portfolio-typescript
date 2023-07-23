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
    title: "ImagineSwimming",
    position: "Lifeguard",
    time: "2020 - 2022",
    location: "Brooklyn, NY",
    description:
      "As a vigilant lifeguard, I prioritized the safety of all swimmers by maintaining a watchful eye on both the water and the deck area. My proactive approach allowed me to quickly respond to any potential hazards or emergencies, ensuring a secure and enjoyable environment for everyone at the pool. "
  },
  {
    title : "Synoptic",
    position : "Matience",
    time: "January 2023 - July 2023",
    location: "NY, NY",
    description :
    "I took charge of building upkeep and promptly addressed tenants' requests and preferences. By ensuring the facility's smooth functioning and promptly responding to their needs, I created a comfortable and inviting environment for all occupants."
  }
];
