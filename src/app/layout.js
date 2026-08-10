import './globals.css';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header/Header';

export const metadata = {
    title: 'FrontEnd - Codeverse',
    description: 'Template do Codeverse',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            < Header />
            <body>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
