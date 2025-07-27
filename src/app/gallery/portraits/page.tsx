import Link from 'next/link';
import style from '@/app/_styles/page.module.css';
import ImageCollection from '@/app/_components/ImageCollection';
import { MoveLeft } from 'lucide-react';
import path from 'path';
import fs from 'fs';

const portraitsPath = 'gallery/portraits';
const portraitsDir = path.resolve('./public', portraitsPath);
const portraitsFilenames = fs.readdirSync(portraitsDir);
const portraitsImages = portraitsFilenames.map((name) => path.join('/', portraitsPath, name));
const Portraits = () => {
    return (
        <div>
            <main className={`${style.main}`}>
                <Link className={`${style.iconText}`} href={'/gallery'}>
                    <MoveLeft color="white" />
                    <span>Back</span>
                </Link>
                <h1 className={`${style.sectionHeaderText}`}>Portraits</h1>
                <div className={`${style.collectionContainer}`}>
                    <ImageCollection images={portraitsImages} />
                </div>
            </main>
        </div>
    );
};
export default Portraits;
