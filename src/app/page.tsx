import Image from 'next/image';
import styles from './_styles/page.module.css';
import homeStyles from './_styles/home.module.css';
import path from 'path';
import fs from 'fs';
import ImageCollection from './_components/ImageCollection';
import Button from './_components/Button';
import Link from 'next/link';

const carCollectionPath = 'collection/cars';
const natureWildlifePath = 'collection/nature_wildlife';
const portraitsPath = 'collection/portraits';
const stylizedPortraitsPath = 'collection/stylized_portraits';

const carDir = path.resolve('./public', carCollectionPath);
const natureWildlifeDir = path.resolve('./public', natureWildlifePath);
const portraitsDir = path.resolve('./public', portraitsPath);
const stylizedPortraitsDir = path.resolve('./public', stylizedPortraitsPath);

const carFilenames = fs.readdirSync(carDir);
const natureWildlifeFilenames = fs.readdirSync(natureWildlifeDir);
const portraitsFilenames = fs.readdirSync(portraitsDir);
const stylizedPortraitsFilenames = fs.readdirSync(stylizedPortraitsDir);

const carImages = carFilenames.map((name) => path.join('/', carCollectionPath, name));
const natureWildlifeImages = natureWildlifeFilenames.map((name) => path.join('/', natureWildlifePath, name));
const portraitsImages = portraitsFilenames.map((name) => path.join('/', portraitsPath, name));
const stylizedPortraitsImages = stylizedPortraitsFilenames.map((name) => path.join('/', stylizedPortraitsPath, name));
console.log(carImages, natureWildlifeImages, portraitsImages, stylizedPortraitsImages);

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

                <h4 style={{ margin: 'auto' }}>Take a look at some of my work below!</h4>

                <ImageCollection collectionHeader={'Portraits'} images={portraitsImages} />
                <ImageCollection collectionHeader={'Stylized Portraits'} images={stylizedPortraitsImages} />
                <ImageCollection collectionHeader={'Cars'} images={carImages} />
                <ImageCollection collectionHeader={'Nature and Wildlife'} images={natureWildlifeImages} />
            </main>
        </div>
    );
};
export default Home;
