import style from '@/app/_styles/page.module.css';
import ImageCollection from '@/app/_components/ImageCollection';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import path from 'path';
import fs from 'fs';

const stylizedPortraitsPath = 'gallery/stylized_portraits';
const stylizedPortraitsDir = path.resolve('./public', stylizedPortraitsPath);
const stylizedPortraitsFilenames = fs.readdirSync(stylizedPortraitsDir);
const stylizedPortraitsImages = stylizedPortraitsFilenames.map((name) => path.join('/', stylizedPortraitsPath, name));
const StylizedPortraits = () => {
    return (
        <div>
            <main className={`${style.main}`}>
                <Link className={`${style.iconText}`} href={'/gallery'}>
                    <MoveLeft color="white" />
                    <span>Back</span>
                </Link>
                <h1 className={`${style.sectionHeaderText}`}>Stylized Portraits</h1>
                <div className={`${style.collectionContainer}`}>
                    <ImageCollection images={stylizedPortraitsImages} />
                </div>
            </main>
        </div>
    );
};
export default StylizedPortraits;
