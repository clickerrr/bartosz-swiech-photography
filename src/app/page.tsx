import styles from './_styles/page.module.css';
import homeStyles from './_styles/home.module.css';
import Link from 'next/link';
import ImageCollectionContainer from './_components/ImageCollectionContainer';
import { InstagramIcon } from 'lucide-react';
import BookNow from './_components/BookNow';
import { getImageProps } from 'next/image';
import getBackgroundImage from '@/lib/getBackgroundImage';

const Home = () => {
    const {
        props: { srcSet },
    } = getImageProps({ alt: 'River flowing through a forest', width: 1920, height: 1080, src: '/hero-landing.jpg' });
    //const backgroundImage = getBackgroundImage(srcSet);
    //const backgroundStyle = { backgroundImage };
    const backgroundStyle = {
        backgroundImage: `url(/hero-landing.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div>
            <main className={styles.main}>
                <div className={`${homeStyles.heroLanding}`} style={backgroundStyle}>
                    <Link target="_blank" href="https://www.instagram.com/barteksphoto">
                        <InstagramIcon className={`${homeStyles.heroInstaIcon}`} />
                    </Link>
                    <h1 className={`${homeStyles.heroText}`}>Welcome to my site</h1>
                </div>

                <div className={`${styles.section} ${homeStyles.introductionSection}`}>
                    <div className={`${styles.sectionContents} ${homeStyles.introductionSectionContents}`}>
                        <h1>Hello, My Name is Bartek!</h1>
                        <h2>I am a photographer based in Phoenix, Arizona</h2>
                        <h2>I do portrait photography for graduations, cars, or family portraits, you name it!</h2>
                        <h3>In my free time I love to go out in nature and take some wildlife and landscape photos!</h3>
                        <p>
                            I focus on making sure your photography experience is as relaxed and cohesive as possible,
                            by keeping you informed and including you in the process of creating the photos, from start
                            to finish!
                        </p>
                        <BookNow />
                        <h4>Take a look at some of my work below!</h4>
                    </div>
                </div>

                <ImageCollectionContainer />
            </main>
        </div>
    );
};
export default Home;
