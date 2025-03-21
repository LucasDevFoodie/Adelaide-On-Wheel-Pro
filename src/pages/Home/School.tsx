import { Button, Text, Image } from '../../components';
import { Images } from '../../assets/images/Images';

import styles from './School.module.css';

export const School = () => {
  return (
    <section className={`${styles.school} container section`}>
      <div>
      <h3 className={styles.subtitle}>About Our School</h3>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>AOW PRO</h2>
        <a target="_blank" href="https://wa.me/61478750264?text=Hi!,I would like to be part of the school">
          <Button ariaLabel='button redirect website'>
            Reach Out
          </Button>
        </a>
      </div>
      <Text>
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