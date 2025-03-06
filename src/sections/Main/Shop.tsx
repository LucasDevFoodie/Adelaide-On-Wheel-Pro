import styles from './Shop.module.css';
import { Text, Button, Image } from '../../components';
import { Images } from '../../assets/Images'

export const Shop = () => {
    return (
        <section className={`${styles.contact} container section`}>
            <h2 className={styles.title}>About our shop</h2>
            <Text>Whether you are starting to skate, looking for a change of those old skates or any
                inquiries, You can find various products from our dedicated brand <strong>Cityrun</strong>.
                <br />Feel free to look and reach out, we will get back to you as soon as possible.
            </Text>
            <div className={styles.imgContainer}>
                <div className={styles.imgWrapper}>
                    <Image lazyLoading={true} src={Images.cityrun_3} alt="cityrun skate" />
                </div>
                <div className={styles.imgWrapper}>
                    <Image lazyLoading={true} src={Images.cityrun_2} alt="cityrun skate" />
                </div>
                <div className={styles.imgWrapper}>
                    <Image lazyLoading={true} src={Images.cityrun_1} alt="cityrun skate" />
                </div>
            </div>
            <a target="_blank" href="">
                <Button ariaLabel='contact email'>Visit Shop</Button>
            </a>
        </section>
    )
}