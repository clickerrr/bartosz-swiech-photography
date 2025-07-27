import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import style from '@/app/_styles/page.module.css';
import fs from 'fs';
import path from 'path';
import ImageCollection from '@/app/_components/ImageCollection';
import PageHeader from '@/app/_components/PageHeader';

const carGalleryPath = 'gallery/cars';
const carDir = path.resolve('./public', carGalleryPath);
const carFilenames = fs.readdirSync(carDir);

const carImages = carFilenames.map((name) => path.join('/', carGalleryPath, name));
const Cars = () => {
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
