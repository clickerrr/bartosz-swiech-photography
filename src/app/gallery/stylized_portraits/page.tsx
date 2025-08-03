import style from '@/app/_styles/page.module.css';
import ImageCollection from '@/app/_components/ImageCollection';
import path from 'path';
import PageHeader from '@/app/_components/PageHeader';
import readDirectory from '@/lib/readDirectory';

const StylizedPortraits = async () => {
    const stylizedPortraitsPath = 'gallery/stylized_portraits';
    const stylizedPortraitsDir = path.resolve('./public', stylizedPortraitsPath);
    const stylizedPortraitsFilenames = await readDirectory(stylizedPortraitsDir);
    const stylizedPortraitsImages = stylizedPortraitsFilenames.map((name) =>
        path.join('/', stylizedPortraitsPath, name)
    );
    return (
        <div>
            <main className={`${style.main}`}>
                <PageHeader title={'Stylized Portraits'} />
                <div className={`${style.collectionContainer}`}>
                    <ImageCollection images={stylizedPortraitsImages} />
                </div>
            </main>
        </div>
    );
};
export default StylizedPortraits;
