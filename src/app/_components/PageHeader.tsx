'use client';
import style from '@/app/_styles/pageHeader.module.css';
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
interface PageHeaderProps {
    title: string;
}
const PageHeader = ({ title }: PageHeaderProps) => {
    const router = useRouter();
    return (
        <div className={`${style.pageHeader}`}>
            <div className={`${style.headerLeft}`}>
                <a
                    className={`${style.iconText}`}
                    onClick={() => {
                        router.back();
                    }}
                >
                    <MoveLeft color="white" />
                    <span>Back</span>
                </a>
            </div>
            <div className={`${style.headerCenter}`}>
                <h1 className={`${style.pageHeaderText}`}>{title}</h1>
            </div>
            <div className={`${style.headerRight}`}></div>
        </div>
    );
};
export default PageHeader;
