import style from '@/app/_styles/page.module.css';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
interface PageHeaderProps {
    title: string;
}
const PageHeader = ({ title }: PageHeaderProps) => {
    return (
        <div className={`${style.pageHeader}`}>
            <div className={`${style.headerLeft}`}>
                <Link className={`${style.iconText}`} href={'/gallery'}>
                    <MoveLeft color="white" />
                    <span>Back</span>
                </Link>
            </div>
            <div className={`${style.headerCenter}`}>
                <h1 className={`${style.sectionHeaderText}`}>{title}</h1>
            </div>
            <div className={`${style.headerRight}`}></div>
        </div>
    );
};
export default PageHeader;
