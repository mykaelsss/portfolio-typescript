import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton onClick={() => window.open("/Mykael.Sicard.Resume.Feb.2025.1.pdf")}>
        My resume
      </OutlineButton>
    </header>
  );
};
