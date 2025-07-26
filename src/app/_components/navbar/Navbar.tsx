import styles from '@/app/_styles/navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.container} ${styles.titleContainer}`}>
                <h1>Bartosz Swiech Photography</h1>
            </div>
            <div className={`${styles.container} ${styles.linksContainer}`}>
                <Link href="/">Home</Link>
                <Link href="/gallery">Gallery</Link>
                <Link
                    target="_blank"
                    href="https://bartekswiechphotography.pixieset.com/contact-form/cf_vyOvB2xOKK998RbKphludZY1pgcb"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};
export default Navbar;
