import { Images } from '../../assets/images/Images'
import { Button, Text } from '../../components'
import { ProductSlider } from '../../components/ProductSlider'
import styles from './School.module.css'

export const School = () => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <h2 className={styles.title}>AOW PRO</h2>
                <a target="_blank" href="https://wa.me/61478750264?text=Hi!,I would like to be part of the school">
                    <Button ariaLabel='button redirect website'>
                        Reach Out
                    </Button>
                </a>
            </div>
            <Text>
                Welcome to our School, where fun, fitness, and community come together on wheels!
                Whether you're a complete beginner or an experienced skater looking to refine your skills,
                our school offers professional training for you.
            </Text>
            <div className={styles.sliderContainer}>
                <ProductSlider images={Images.school} />
            </div>
            <hr />
            <Text>
                Meet <strong>Camilo</strong>, our instructor that guides skaters of all levels through engaging lessons that focus on technique, confidence, and most importantly having a great time!
                From mastering the basics to high endurance training, our sessions are designed to challenge and inspire.
            </Text>
            <div className={styles.sliderContainer}>
                <ProductSlider images={Images.camilo} />
            </div>
            <hr />
            <h3 className={styles.subtitle}>Location</h3>
            <div className={styles.mapContainer}>
                <iframe className={styles.map}  
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                src="https://www.google.com/maps/embed/?pb=!1m18!1m12!1m3!1d3274.098657248481!2d138.660437!3d-34.8537483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0b55a8b321593%3A0x5e5dd8c52e1f54c8!2sGilles%20Plains%20Sporting%20Complex!5e0!3m2!1sen!2sau!4v1741744311830!5m2!1sen!2sau"></iframe>
            </div>
            <hr />
            <h3 className={styles.subtitle}>Schedule</h3>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <tr>
                        <th>
                            <Text><strong>Sunday</strong></Text>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Text><strong>9:30am to 11:00am</strong></Text>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Text>Don't forget to bring your skates, water, comfy clothes, a helmet and good vibes!
                <br />
                (Note: we might be able to provide you with all these things if you need them).
            </Text>
            <hr />
        </div>
    )
}