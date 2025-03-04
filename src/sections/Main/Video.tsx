import styles from './Video.module.css'
import { Videos } from "../../assets/Videos"

export const Video = () => {
    return (
        <section className={`${styles.about} container section`}>
                <video loop autoPlay muted className={styles.video}>
                    <source src={Videos.about} type='video/mp4'></source>
                    Your browser does not support the video tag.
                </video>
        </section >
    )
}