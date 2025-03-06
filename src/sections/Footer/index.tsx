import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={`${styles.footer} container`}>
            <div className={styles.wrapper}>
                <h4 className={styles.copyright}>
                    <a className={styles.img} href="https://www.linkedin.com/in/lucas-atala-99547a307" target="_blank">
                       Developed by <strong> @ Lukesky</strong>
                    </a>
                </h4>
            </div>
        </footer>
    )
}