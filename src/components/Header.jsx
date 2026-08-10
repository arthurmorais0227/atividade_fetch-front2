import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const LOGO = '/images/logo-wizardDex.png';

function Header() {
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
          <Link href="/dados" className={styles.link}>
            Dados
          </Link>
          <Link href="/sobre" className={styles.link}>
            Sobre
          </Link>
        </nav>

        <Link href="" className={styles.ctaBtn}>
          Entrar
        </Link>
      </div>
    </header>
  );
}

export default Header;