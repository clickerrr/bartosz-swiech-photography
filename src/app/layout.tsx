import Navbar from '@/app/_components/navbar/Navbar';
import './_styles/globals.css';
import localFont from 'next/font/local';

const interFont = localFont({
    src: '../../public/Inter-4.1/InterVariable.ttf',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={interFont.className}>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
