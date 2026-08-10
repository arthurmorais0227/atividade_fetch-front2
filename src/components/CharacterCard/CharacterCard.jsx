import styles from "./CharacterCard.module.css";
import Image from "next/image";

export default function CharacterCard({ foto, nome, casa, ator }) {
    return (
        <article className={styles.card}>
            <Image className={styles.imagem}
                src={foto}
                width={130}
                height={130}
                alt={nome || "Personagem"}
            />
            <p className={styles.nome}>{nome}</p>
            <p>{casa}</p>
            <p>{ator}</p>
        </article>
    );
}