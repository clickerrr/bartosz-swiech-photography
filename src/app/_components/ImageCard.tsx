import style from '@/app/_styles/imageCard.module.css';
import { getImageProps } from 'next/image';
import getBackgroundImage from '@/lib/getBackgroundImage';
interface ImageCardProps {
    imagePath: string;
    cardText?: string;
}
const ImageCard = ({ imagePath, cardText }: ImageCardProps) => {
    console.log('imagePath', imagePath);
    const {
        props: { srcSet },
    } = getImageProps({ alt: '', width: 300, height: 300, src: `/${imagePath}` });
    const backgroundImage = getBackgroundImage(srcSet);
    const backgroundStyle = { backgroundImage };
    return (
        <div className={`${style.card}`}>
            <div className={`${style.image}`} style={backgroundStyle}></div>
            {cardText ? <h2 className={`${style.cardText}`}>{cardText}</h2> : <></>}{' '}
        </div>
    );
};
export default ImageCard;
