import Navbar from '@/app/_components/navbar/Navbar';
import './_styles/globals.css';
import localFont from 'next/font/local';
import Head from 'next/head';

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
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <title>Bartek Swiech Photography</title>
            </head>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
