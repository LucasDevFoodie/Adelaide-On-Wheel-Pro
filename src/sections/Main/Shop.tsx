import styles from './Shop.module.css';
import { Text, Button } from '../../components';

export const Shop = () => {
    return (
        <section className={`${styles.contact} container section`}>
            <h2 className={styles.title}>About our shop</h2>
            <Text>Whether you are starting to skate, wanting to change those old skates or any 
                inquiries, You can find a variety of products from our dedicated brand <strong>Cityrun</strong>.
                <br />Feel free to take a look and reach out, we will get back to you as soon as possible.
            </Text>
            <a target="_blank" href="">
                <Button ariaLabel='contact email'>Visit Shop</Button>
            </a>
        </section>
    )
}