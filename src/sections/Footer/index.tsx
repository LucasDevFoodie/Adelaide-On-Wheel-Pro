import styles from './Footer.module.css'
import { Image } from '../../components'
import { Images } from '../../assets/Images'

export const Footer = () => {
    return (
        <footer className={`${styles.footer} container section`}>
            <div className={styles.wrapper}>
                <h3 className={styles.label}>Follow us on</h3>
                <div className={styles.logos}>
                    <a className={styles.img} href="https://www.facebook.com/camilosabee" target="_blank">
                        <Image lazyLoading={true} src={Images.facebook} alt="facebook logo" />                        
                    </a>
                    <a className={styles.img} href="https://www.instagram.com/adelaideonwheels/" target="_blank">
                    <Image lazyLoading={true} src={Images.instagram} alt="instagram logo" />
                    </a>
                </div>
                <h4 className={styles.copyright}>
                    <a className={styles.img} href="https://www.linkedin.com/in/lucas-atala-99547a307" target="_blank">
                       Developed by <strong> @ Lukesky</strong>
                    </a>
                </h4>
            </div>
        </footer>
    )
}