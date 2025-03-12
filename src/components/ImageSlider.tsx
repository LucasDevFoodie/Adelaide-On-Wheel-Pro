import React, { useState, useEffect, useCallback } from "react"
import styles from './ImageSlider.module.css';
import { Button, Image } from '.'
import { createPortal } from "react-dom";
import { Images } from "../assets/images/Images";

interface ProductSliderProps {
    images: string[];
    iconSwipe?: boolean;
}

export const ImageSlider = ({ images, iconSwipe = true }: ProductSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const goToNext = useCallback(() => setCurrentIndex((prev) =>
        (prev + 1) % images.length), [images]);
    const goToPrev = useCallback(() => setCurrentIndex((prev) =>
        (prev - 1 + images.length) % images.length), [images]);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEndX(e.touches[0].clientX);
    }

    const handleTouchEnd = () => {
        const swipeThreshold = 50; //Minimun swipe distance to trigger action

        if (touchEndX != 0) // Equals to a click
        {
            if (touchStartX - touchEndX > swipeThreshold) {
                goToNext();
            } else if (touchEndX - touchStartX > swipeThreshold) {
                goToPrev();
            }
        }

        setTouchEndX(0);
    }

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (isModalOpen && event.key == 'Escape') setIsModalOpen(false);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isModalOpen]);

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.imageContainer}
                onClick={() => setIsModalOpen(true)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <Image className={styles.sliderImage} src={images[currentIndex]} alt="Image selected" />
            </div>
            {/* Interchangeable with CSS rules for desktop also*/}
            {iconSwipe &&
                <Image className={styles.swipe} src={Images.swipe} alt="Swipe icon" />
            }

            <Button className={styles.prevBtn} onClick={goToPrev} ariaLabel="Previous Image">❮</Button>
            <Button className={styles.nextBtn} onClick={goToNext} ariaLabel="Next Image">❯</Button>

            {isModalOpen && (
                createPortal(
                    <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <Image className={styles.modalImage} src={images[currentIndex]} alt="Zoomed Product" />
                            <Button className={styles.closeModal} onClick={() => setIsModalOpen(false)}
                                ariaLabel="Close Modal">✖</Button>
                        </div>
                    </div>, document.body
                )
            )}
        </div>
    );
}