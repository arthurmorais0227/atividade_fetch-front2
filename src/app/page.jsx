import styles from "./Home.module.css";
import Header from "../components/Header/Header";
import Link from "next/link";
import Image from 'next/image';

const LOGO = '/images/logo-wizardDex.png';

export default function Home() {
  return (
    <>

      <main className={styles.principal}>
        <section className={styles.heroInicial}>

          <div className={styles.sobreposicaoHero} />

          <div className={styles.conteudoHero}>
            <div className={styles.logoDaHome}>
              <span className={styles.iconeLogo}>⚡</span>
              <div>
                <h1>
                  Wizard<span>Dex</span>
                </h1>
                <p>Enciclopédia Mágica</p>
              </div>
            </div>

            <p className={styles.subtituloHero}>
              Uma experiência leve e visual para explorar personagens do
              universo de Harry Potter.
            </p>

            <div className={styles.botoesHero}>
              <Link href="/personagens" className={styles.botaoPrimario}>
                🧙 Explorar personagens
              </Link>
              <Link href="/Sobre" className={styles.botaoSecundario}>
                Conheça o projeto
              </Link>
            </div>
          </div>

          <Link href="/" className={styles.logoLink}>
            <Image
              src={LOGO}
              alt="WizardDex Logo"
              className={styles.logo}
              width={600}
              height={300}
              priority
            />
          </Link>
        </section>

        <section className={styles.introducao}>
          <h2>Seu portal mágico para descobrir personagens</h2>
          <p className={styles.textoIntroducao}>
            A WizardDex reúne informações de forma simples, bonita e organizada
            para quem ama o universo de Harry Potter.
          </p>
        </section>

        <section className={styles.objetivo}>
          <div className={styles.conteudoObjetivo}>
            <span className={styles.iconeSecao}>🪄</span>
            <div>
              <span className={styles.tituloPequeno}>OBJETIVO</span>
              <h2>Transformar dados em uma experiência mágica</h2>
              <p>
                O projeto usa React e Next.js para trazer uma interface moderna
                e acessível, consumindo uma API pública com informações dos
                personagens.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.tecnologias}>
          <h2>Tecnologias utilizadas</h2>
          <p className={styles.descricaoDaSecao}>
            Ferramentas escolhidas para construir uma aplicação funcional,
            organizada e com boa experiência visual.
          </p>

          <div className={styles.gradeTecnologias}>
            <div className={styles.cartaoTecnologia}>
              <div className={styles.iconeTecnologia}>⚛️</div>
              <h3>React</h3>
              <p>Interface dinâmica e componentizada.</p>
            </div>
            <div className={styles.cartaoTecnologia}>
              <div className={styles.iconeTecnologia}>▲</div>
              <h3>Next.js</h3>
              <p>Estrutura da aplicação e páginas.</p>
            </div>
            <div className={styles.cartaoTecnologia}>
              <div className={styles.iconeTecnologia}>🔗</div>
              <h3>Axios</h3>
              <p>Consumo da API de personagens.</p>
            </div>
          </div>
        </section>

        <section className={styles.chamadaFinal}>
          <span>⚡</span>
          <h2>Pronto para entrar no mundo mágico?</h2>
          <p>Explore os personagens e descubra mais sobre a WizardDex.</p>
          <Link href="/personagens" className={styles.botaoPrincipal}>
            Abrir WizardDex →
          </Link>
        </section>
      </main>
    </>
  );
}
