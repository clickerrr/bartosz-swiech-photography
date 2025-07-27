import style from '../_styles/imageCollection.module.css';
import Image from 'next/image';
interface ImageCollectionProps {
    collectionHeader?: string;
    images: string[];
}
const ImageCollection = ({ collectionHeader, images }: ImageCollectionProps) => {
    return (
        <div className={`${style.collection}`}>
            {collectionHeader ? (
                <div className={`${style.collectionHeader}`}>
                    <h2>{collectionHeader}</h2>
                </div>
            ) : (
                <></>
            )}
            <div className={`${style.collectionImages}`}>
                {images.map((imagePath, index) => {
                    return (
                        <Image
                            className={style.collectionImage}
                            key={index}
                            src={imagePath}
                            width={500}
                            height={500}
                            alt="Image"
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default ImageCollection;
