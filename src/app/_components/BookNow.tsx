import homeStyles from '@/app/_styles/home.module.css';
import Link from 'next/link';

const BookNow = () => {
    return (
        <Link
            className={`${homeStyles.fancy}`}
            href={'https://bartekswiechphotography.pixieset.com/booking/'}
            target="_blank"
        >
            <span className={`${homeStyles.topKey}`}></span>
            <span className={`${homeStyles.text}`}>{'Book a Session Now!'}</span>
            <span className={`${homeStyles.bottomKey1}`}></span>
            <span className={`${homeStyles.bottomKey2}`}></span>
        </Link>
    );
};
export default BookNow;
