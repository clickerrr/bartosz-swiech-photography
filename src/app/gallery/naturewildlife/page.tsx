import style from '@/app/_styles/page.module.css';
import path from 'path';
import fs from 'fs';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import ImageCollection from '@/app/_components/ImageCollection';
import PageHeader from '@/app/_components/PageHeader';
const natureWildlifePath = 'gallery/nature_wildlife';
const natureWildlifeDir = path.resolve('./public', natureWildlifePath);
const natureWildlifeFilenames = fs.readdirSync(natureWildlifeDir);
const natureWildlifeImages = natureWildlifeFilenames.map((name) => path.join('/', natureWildlifePath, name));
const NatureWildlife = () => {
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
