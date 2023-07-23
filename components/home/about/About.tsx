import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey there! I'm Mykael, a recent bootcamp graduate,
              and I'm super excited to kickstart my career in development.
              I specialize in the MERN stack,
              but I'm always ready to learn new technologies to tackle any challenge.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            When I&apos;m not coding, you'll find me immersed in video games—
            I&apos;ve been a passionate gamer since I was just 3 years old!
            Additionally, fitness is a big part of my life;
            I&apos;ve been working out since I was 15.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m actively seeking new opportunities where I can put my skills to the test and continue growing as a developer.
              If you know of any openings that might be a great fit, let's connect!
              I'm eager to take on new challenges and make a positive impact in the world of development.
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
