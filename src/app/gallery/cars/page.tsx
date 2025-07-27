import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import style from '@/app/_styles/page.module.css';
import fs from 'fs';
import path from 'path';
import ImageCollection from '@/app/_components/ImageCollection';

const carGalleryPath = 'gallery/cars';
const carDir = path.resolve('./public', carGalleryPath);
const carFilenames = fs.readdirSync(carDir);

const carImages = carFilenames.map((name) => path.join('/', carGalleryPath, name));
const Cars = () => {
    return (
        <div>
            <main className={`${style.main}`}>
                <Link className={`${style.iconText}`} href={'/gallery'}>
                    <MoveLeft color="white" />
                    <span>Back</span>
                </Link>
                <h1 className={`${style.sectionHeaderText}`}>Cars</h1>
                <div className={`${style.collectionContainer}`}>
                    <ImageCollection images={carImages} />
                </div>
            </main>
        </div>
    );
};
export default Cars;
