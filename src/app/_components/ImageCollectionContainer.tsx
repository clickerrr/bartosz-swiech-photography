import homeStyles from '@/app/_styles/home.module.css';
import ImageCollection from './ImageCollection';
import fs from 'fs';
import path from 'path';

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

const ImageCollectionContainer = ({ images }) => {
    return (
        <div className={`${homeStyles.collectionSeparator}`}>
            <ImageCollection collectionHeader={'Portraits'} images={portraitsImages} />
            <ImageCollection collectionHeader={'Stylized Portraits'} images={stylizedPortraitsImages} />
            <ImageCollection collectionHeader={'Cars'} images={carImages} />
            <ImageCollection collectionHeader={'Nature and Wildlife'} images={natureWildlifeImages} />
        </div>
    );
};
export default ImageCollectionContainer;

// This function gets called at build time
export async function getStaticProps() {
    console.log('getStaticProps');
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/test');
    const images = await res.json();

    console.log(res);
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            images,
        },
    };
}
