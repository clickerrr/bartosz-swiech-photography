import style from '@/app/_styles/page.module.css';
import path from 'path';
import ImageCollection from '@/app/_components/ImageCollection';
import PageHeader from '@/app/_components/PageHeader';
import readDirectory from '@/lib/readDirectory';

const Cars = async () => {
    const carGalleryPath = 'gallery/cars';
    const carDir = path.resolve('./public', carGalleryPath);
    const carFilenames = await readDirectory(carDir);

    const carImages = carFilenames.map((name) => path.join('/', carGalleryPath, name));
    return (
        <div>
            <main className={`${style.main}`}>
                <PageHeader title={'Cars'} />
                <div className={`${style.collectionContainer}`}>
                    <ImageCollection images={carImages} />
                </div>
            </main>
        </div>
    );
};
export default Cars;
