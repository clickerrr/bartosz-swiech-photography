import style from '@/app/_styles/page.module.css';
import path from 'path';
import ImageCollection from '@/app/_components/ImageCollection';
import PageHeader from '@/app/_components/PageHeader';
import readDirectory from '@/lib/readDirectory';
const NatureWildlife = async () => {
    const natureWildlifePath = 'gallery/nature_wildlife';
    const natureWildlifeDir = path.resolve('./public', natureWildlifePath);
    const natureWildlifeFilenames = await readDirectory(natureWildlifeDir);
    const natureWildlifeImages = natureWildlifeFilenames.map((name) => path.join('/', natureWildlifePath, name));
    return (
        <div>
            <main className={`${style.main}`}>
                <PageHeader title={'Nature and Wildlife'} />
                <div className={`${style.collectionContainer}`}>
                    <ImageCollection images={natureWildlifeImages} />
                </div>
            </main>
        </div>
    );
};
export default NatureWildlife;
