import styles from './Shop.module.css'
import { useLocation } from 'react-router-dom'
import { Text, ImageSlider } from '../../components';
import { Images } from '../../assets/images/Images';
import { useCallback, useEffect } from 'react';

export const Shop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        element.style.border = '2px solid grey';
      }
      return () => {
        if (element) {
          element.style.border = 'none';
        }
      }
    }
  }, [location]);

  const handleShop = useCallback((elementId: string) => {
    const message = encodeURIComponent(`Hi, I would like to shop this skate: 
      ${window.location.origin}/shop/#${elementId}`);
    window.open(`https://wa.me/61478750264?text=${message}`, '_blank')
  }, []);

  return (
    <div className="container">
      <h4 className={styles.title}>Pick one for you!</h4>
      <Text>This are the current models available that will cover your expectations,
        from Fitness to High Performance Racing skates.
        Every model has a range of sizes and colours, feel free to<strong> Click on Shop </strong>
        and we will provide you all the details.
      </Text>
      <hr />
      <div className={styles.productSlidesContainer}>
        {Object.entries(Images.shop).map((skate) => {
          return (
            <div key={skate[0]}  className={styles.productSlide}>
              <ImageSlider images={Object.entries(skate[1]).map((entry) => entry[1])} />
              <button type='button' id={skate[0]} className={styles.btn} onClick={() => handleShop(skate[0])} aria-label='Details for shopping'>Shop ❯</button> 
              <hr />
            </div>
          )
        })}
      </div>
    </div>
  )
}