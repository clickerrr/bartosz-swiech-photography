import ImageCard from '@/app/_components/ImageCard';
import styles from '@/app/_styles/page.module.css';
import galleryStyles from '@/app/_styles/gallery.module.css';
import Link from 'next/link';

const Gallery = () => {
    return (
        <div className={styles.page}>
            <main className={`${styles.main} ${galleryStyles.main}`}>
                <h1 className={`${galleryStyles.title}`}>Gallery</h1>
                <div className={`${galleryStyles.galleryContainer}`}>
                    <Link href="/gallery/cars">
                        <ImageCard cardText={'Cars'} imagePath="collection/cars/car1.jpg" />
                    </Link>
                    <Link href="/gallery/portraits">
                        <ImageCard cardText={'Portraits'} imagePath="collection/portraits/portrait2.jpg" />
                    </Link>
                    <Link href="/gallery/stylized_portraits">
                        <ImageCard
                            cardText={'Stylized Portraits'}
                            imagePath="/collection/stylized_portraits/stylized_portraits2.jpg"
                        />
                    </Link>
                    <Link href="/gallery/naturewildlife">
                        <ImageCard
                            cardText={'Nature and Wildlife'}
                            imagePath="collection/nature_wildlife/nature_wildlife1.jpg"
                        />
                    </Link>
                </div>
            </main>
        </div>
    );
};
export default Gallery;
