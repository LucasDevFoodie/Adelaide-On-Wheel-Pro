import { Button, Text, Image } from '../../components';
import { Images } from '../../assets/Images';

import styles from './School.module.css';

export const School = () => {
  return (
    <section className={`${styles.school} container section`}>
      <div>
      <h3 className={styles.subtitle}>About Our School</h3>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>AOW PRO</h2>
        <a target="_blank" href="https://developerhub.ppro.com/">
          <Button ariaLabel='button redirect website'>
            Reach Out
          </Button>
        </a>
      </div>
      <Text>Welcome to our School, where fun, fitness, and community come together on wheels!
        Whether you're a complete beginner or an experienced skater looking to refine your skills,
        our school offers professional training for you.
        <br />
        Meet Camilo, our instructor that guides skaters of all levels through engaging lessons that focus on technique, confidence, and most importantly having a great time!
        From mastering the basics to high endurance training, our sessions are designed to challenge and inspire.
        <br />
        More than just a school, we’re a global community that welcomes skaters from around the world.
        So gear up and join us in experiencing the joy of inline skating in Adelaide!
      </Text>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgWrapper}>
          <Image lazyLoading={true} src={Images.escuela_1} alt="alumni" />
        </div>
        <div className={styles.imgWrapper}>
          <Image lazyLoading={true} src={Images.escuela_2} alt="alumni and teacher" />
        </div>
        <div className={styles.imgWrapper}>
          <Image lazyLoading={true} src={Images.escuela_3} alt="competition" />
        </div>
      </div>
    </section>
  )
}