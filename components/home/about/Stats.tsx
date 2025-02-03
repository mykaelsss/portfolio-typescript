import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Currently Know</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Python</span>
            <span className="chip">Java</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Node.js</span>
            <span className="chip">Next.js</span>
            <span className="chip">Express</span>
            <span className="chip">MySQL</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">GitHub</span>
            <span className="chip">Git</span>
            <span className="chip">Bootstrap</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Flask</span>
            <span className="chip">Spring</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Currently Learning</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Docker</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
