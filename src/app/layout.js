import './globals.css';
import { Toaster } from 'react-hot-toast';
import { cookies } from 'next/headers';
import Header from '@/components/Header/Header';

export const metadata = {
    title: 'FrontEnd - Codeverse',
    description: 'Template do Codeverse',
};

export default async function RootLayout({ children }) {
    const tema = (await cookies()).get('tema')?.value === 'dark' ? 'dark' : 'light';

    return (
        <html lang="pt-BR" data-theme={tema}>
            <body>
                <Header temaInicial={tema} />
                {children}
                <Toaster />
            </body>
        </html>
    );
}
