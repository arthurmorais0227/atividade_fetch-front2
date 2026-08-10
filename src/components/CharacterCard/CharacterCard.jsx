import styles from "./CharacterCard.module.css";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useState } from "react"
import toast from "react-hot-toast";

export default function CharacterCard({ foto, nome, casa, ator }) {
    const [favorito, setFavorito] = useState(false);

    const gerenciarFavorito = () => {
        if (!favorito) {
            toast.success(`Marcou ${nome} como favorito!`);
        }

        setFavorito(!favorito);
    }

    return (

        <article className={styles.card}>
            <Image className={styles.imagem}
                src={foto ? foto : "/images/sem-foto.png"}
                width={130}
                height={130}
                alt={nome || "Personagem"}
            />
            <p className={styles.nome}>{nome}</p>
            <p className={styles.texto}>{casa}</p>
            <p className={styles.texto}>{ator}</p>

            <FaHeart onClick={gerenciarFavorito} className={styles.coracao} size={30} color={favorito ? "red" : "white"}  />
        </article>
    );
}