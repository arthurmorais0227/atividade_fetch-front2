import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.errorCode}>404</span>
        <h1 className={styles.title}>Página não encontrada</h1>
        <p className={styles.description}>
          Parece que o personagem foi removido ou não existe.
        </p>
        <Link href="/" className={styles.homeButton}>
           Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}