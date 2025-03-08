import { Images } from '../assets/images/Images';
import { Image, Text } from '../components'
import styles from './Label.module.css';

export const Label = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className={styles.labelWrapper}>
                <div className={styles.label}>
                    <a href="https://www.instagram.com/adelaideonwheels/" target="_blank">
                        <Image className={styles.img} lazyLoading={true} src={Images.instagram} alt="instagram logo" />
                    </a>
                </div>
            </div>
            {children}
        </>
    )
}