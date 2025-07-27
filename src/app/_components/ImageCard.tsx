import style from '@/app/_styles/imageCard.module.css';
interface ImageCardProps {
    imagePath: string;
    cardText?: string;
}
const ImageCard = ({ imagePath, cardText }: ImageCardProps) => {
    return (
        <div className={`${style.card}`}>
            <div className={`${style.image}`} style={{ backgroundImage: `url("/${imagePath}")` }}></div>
            {cardText ? <h2 className={`${style.cardText}`}>{cardText}</h2> : <></>}{' '}
        </div>
    );
};
export default ImageCard;
