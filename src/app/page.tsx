import styles from './_styles/page.module.css';
import homeStyles from './_styles/home.module.css';
import Link from 'next/link';
import ImageCollectionContainer from './_components/ImageCollectionContainer';

const Home = () => {
    return (
        <div>
            <main className={styles.main}>
                <div className={`${homeStyles.heroLanding}`}>
                    <h1 className={`${homeStyles.heroText}`}>Welcome to my site</h1>
                </div>

                <div className={`${styles.section} ${homeStyles.introductionSection}`}>
                    <div className={`${homeStyles.introductionImage}`}></div>

                    <div className={`${styles.sectionContents} ${homeStyles.introductionSectionContents}`}>
                        <h1>Hello My Name is Bartek!</h1>
                        <h2>I am a photographer based in Phoenix, Arizona</h2>
                        <h2>I do portrait photography for graduations, cars, or family portraits, you name it!</h2>
                        <h3>In my free time I love to go out in nature and take some wildlife and landscape photos!</h3>
                        <p>
                            I focus on making sure your photography experience is as relaxed and cohesive as possible,
                            by keeping you informed and including you in the process of creating the photos, from start
                            to finish!
                        </p>
                        <Link
                            className={`${homeStyles.fancy}`}
                            href={'https://bartekswiechphotography.pixieset.com/booking/'}
                            target="_blank"
                        >
                            <span className={`${homeStyles.topKey}`}></span>
                            <span className={`${homeStyles.text}`}>{'Book a Session Now!'}</span>
                            <span className={`${homeStyles.bottomKey1}`}></span>
                            <span className={`${homeStyles.bottomKey2}`}></span>
                        </Link>
                    </div>
                </div>

                <h4 className={`${homeStyles.collectionSeparatorText}`}>Take a look at some of my work below!</h4>
                <ImageCollectionContainer />
            </main>
        </div>
    );
};
export default Home;
