import styles from '@/app/_styles/navbar.module.css';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.container} ${styles.titleContainer}`}>
                <h1>Bartosz Swiech Photography</h1>
            </div>
            <div className={`${styles.container} ${styles.linksContainer}`}>
                <Link className={`${styles.link}`} href="/">
                    Home
                </Link>
                <Link className={`${styles.link}`} href="/gallery">
                    Gallery
                </Link>
                <Link
                    className={`${styles.link}`}
                    target="_blank"
                    href="https://bartekswiechphotography.pixieset.com/contact-form/cf_vyOvB2xOKK998RbKphludZY1pgcb"
                >
                    Contact
                    <ExternalLink className={`${styles.externalLinkIcon}`} />
                </Link>
            </div>
        </nav>
    );
};
export default Navbar;
