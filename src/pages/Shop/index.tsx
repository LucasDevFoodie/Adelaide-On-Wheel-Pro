import styles from './Shop.module.css'
import { Text } from '../../components'

export const Shop = () => {
    return (
        <div className="container">
            <h4 className={styles.title}>Pick one for you!</h4>
            <Text>This are the current models available that will cover your expectations, 
                from Fitness to High Performance Racing skates.
                Every model has a range of sizes and colours, feel free to<strong> Click on </strong>
                the one that you like and we will provide you more details 
                </Text>
                <hr />
                <h3 className={styles.subtitle}>Fitness/Allround</h3>
                <h3 className={styles.subtitle}>High Performance</h3>

            </div>

    )
}