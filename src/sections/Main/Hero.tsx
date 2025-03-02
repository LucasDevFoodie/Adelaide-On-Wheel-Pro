import { Image, Text } from "../../components";
import styles from "./Hero.module.css";
import { Images } from "../../assets/Images";

export const Hero = () => {
    return (
        <section className={`${styles.hero} container`}>
            <h2 className={styles.subtitle}>Welcome to</h2>
            <div className={styles.titleWrapper}>
                <h1 className={styles.title}>ADELAIDE <br />ON <br />WHEELS<br /> <span className={styles.lastTitleLine}>PRO</span></h1>
                <Image src={Images.hero}
                    alt="inline skater turning"
                    className={styles.img} >
                </Image>
            </div>
            <Text className={styles.description}>A passionate <strong>Speed Skate</strong> school specialized in
                <br />delivering <strong>High Quality Training</strong> while enjoying teamwork!</Text>
        </section>
    )
}