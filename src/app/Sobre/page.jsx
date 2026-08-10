import styles from "./Sobre.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Sobre() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.topo}>
          <div className={styles.icone}>✦</div>
          <span>WIZARDDEX</span>
          <h1>Sobre o projeto</h1>
          <p>
            Conheça um pouco mais sobre a equipe por trás desta enciclopédia
            mágica.
          </p>
        </section>

        <section className={styles.info}>
          <div className={styles.cardInfo}>
            <span>🎓</span>
            <div>
              <small>CURSO</small>
              <h2>Técnico em Desenvolvimento de Sistemas</h2>
            </div>
          </div>

          <div className={styles.cardInfo}>
            <span>🏫</span>
            <div>
              <small>TURMA</small>
              <h2>2TDS1</h2>
            </div>
          </div>

          <div className={styles.cardInfo}>
            <span>👨‍🏫</span>
            <div>
              <small>PROFESSORES</small>
              <h2>Marcelo Carboni</h2>
              <h2>Thiago Ferreira</h2>
            </div>
          </div>
        </section>

        <section className={styles.grupo}>
          <div className={styles.titulo}>
            <span>✦</span>
            <p>NOSSA EQUIPE</p>
            <span>✦</span>
          </div>
          <h2>Integrantes do grupo</h2>
          <p className={styles.subtitulo}>
            Desenvolvido em equipe, com código, criatividade e algumas doses de
            magia. 🪄
          </p>

          <div className={styles.listaPessoas}>
            <div className={styles.pessoa}>
              <div className={styles.avatar}>
                <Link href="/" className={styles.logoLink}>
                  <Image
                    src="/images/arthur.png"
                    alt="Arthur Morais"
                    className={styles.avatarFoto}
                    width={48}
                    height={48}
                    priority
                  />
                </Link>
              </div>

              <div>
                <strong>Arthur Morais</strong>

                <span>Desenvolvedor</span>
              </div>
            </div>

            <div className={styles.pessoa}>
              <div className={styles.avatar}>
                <Link href="/" className={styles.logoLink}>
                  <Image
                    src="/images/victor.png"
                    alt="Victor Ferreira"
                    className={styles.avatarFoto}
                    width={48}
                    height={48}
                    priority
                  />
                </Link>
              </div>

              <div>
                <strong>Victor Ferreira</strong>

                <span>Desenvolvedor</span>
              </div>
            </div>

            <div className={styles.pessoa}>
              <div className={styles.avatar}>
                <Link href="/" className={styles.logoLink}>
                  <Image
                    src="/images/gustavo.png"
                    alt="Gustavo Victor"
                    className={styles.avatarFoto}
                    width={48}
                    height={48}
                    priority
                  />
                </Link>
              </div>
              <div>
                <strong>Gustavo Victor</strong>

                <span>Integrante</span>
              </div>
            </div>

          </div>
        </section>

        <section className={styles.final}>
          <span>⚡</span>
          <p>
            WizardDex • Uma enciclopédia feita por desenvolvedores em
            treinamento.
          </p>
        </section>
      </main>
    </>
  );
}
