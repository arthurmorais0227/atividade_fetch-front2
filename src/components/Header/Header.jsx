'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const LOGO = '/images/logo-wizardDex.png';

function Header({ temaInicial = 'light' }) {
    const [tema, setTema] = useState(temaInicial);

    useEffect(() => {
        const temaSalvo = document.documentElement.dataset.theme || 'light';
        setTema(temaSalvo);

        const atualizarTema = (event) => setTema(event.detail);
        window.addEventListener('temaAlterado', atualizarTema);

        return () => window.removeEventListener('temaAlterado', atualizarTema);
    }, []);

    const alternarTema = () => {
        const novoTema = tema === 'light' ? 'dark' : 'light';
        const dataExpiracao = new Date();
        dataExpiracao.setDate(dataExpiracao.getDate() + 30);

        document.cookie = `tema=${novoTema}; expires=${dataExpiracao.toUTCString()}; path=/`;
        document.documentElement.dataset.theme = novoTema;
        setTema(novoTema);
        window.dispatchEvent(new CustomEvent('temaAlterado', { detail: novoTema }));
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoLink}>
                    <Image
                        src={LOGO}
                        alt="WizardDex Logo"
                        className={styles.logo}
                        width={150}
                        height={50}
                        priority
                    />
                </Link>

                <nav className={styles.nav}>
                    <Link href="/" className={`${styles.link} ${styles.active}`}>
                        Início
                    </Link>
                    <Link href="/personagens" className={styles.link}>
                        Personagens
                    </Link>
                    <Link href="/Sobre" className={styles.link}>
                        Sobre
                    </Link>
                </nav>

                <button
                    type="button"
                    className={styles.themeButton}
                    onClick={alternarTema}
                    aria-label={`Ativar tema ${tema === 'light' ? 'escuro' : 'claro'}`}>
                    {tema === 'light' ? '🌙' : '☀️'}
                </button>

                <Link href="" className={styles.ctaBtn}>
                    Entrar
                </Link>
            </div>
        </header>
    );
}

export default Header;
