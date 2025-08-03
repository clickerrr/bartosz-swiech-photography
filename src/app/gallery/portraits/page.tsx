import style from '@/app/_styles/page.module.css';
import ImageCollection from '@/app/_components/ImageCollection';
import path from 'path';
import PageHeader from '@/app/_components/PageHeader';
import readDirectory from '@/lib/readDirectory';

const Portraits = async () => {
    const portraitsPath = 'gallery/portraits';
    const portraitsDir = path.resolve('./public', portraitsPath);
    const portraitsFilenames = await readDirectory(portraitsDir);
    const portraitsImages = portraitsFilenames.map((name) => path.join('/', portraitsPath, name));
    return (
        <div>
            <main className={`${style.main}`}>
                <PageHeader title={'Portraits'} />
                <div className={`${style.collectionContainer}`}>
                    <ImageCollection images={portraitsImages} />
                </div>
            </main>
        </div>
    );
};
export default Portraits;
