import Link from 'next/link';
import styles from './Not-Found/not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <span className={styles.errorCode}>404</span>
        <h1 className={styles.title}>Página não encontrada</h1>
        <p className={styles.description}>
          Parece que o conteúdo foi removido ou o endereço está incorreto.
        </p>
        <Link href="/" className={styles.homeButton}>
          Voltar para a página inicial
        </Link>
      </section>
    </main>
  );
}
