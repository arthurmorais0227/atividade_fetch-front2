import styles from "./CharacterCard.module.css";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import Modal from "@/components/characterModal/Modal";

export default function CharacterCard({
    foto,
    nome,
    casa,
    ator,
    especie,
    patrono,
    dataNascimento,
    corOlhos,
    corCabelo,
    vivo,
}) {
    const [favorito, setFavorito] = useState(false);
    const [modalAberto, setModalAberto] = useState(false);

    const gerenciarFavorito = () => {
        if (!favorito) {
            toast.success(`Marcou ${nome} como favorito!`);
        }

        setFavorito(!favorito);
    };

    return (
        <>
            <article className={styles.card} onClick={() => setModalAberto(true)}>
                <Image
                    className={styles.imagem}
                    src={foto || "/images/sem-foto.png"}
                    width={130}
                    height={130}
                    alt={nome || "Personagem"}
                />
                <p className={styles.nome}>{nome}</p>
                <p className={styles.texto}>{casa}</p>
                <p className={styles.texto}>{ator}</p>

                <button
                    type="button"
                    onClick={(event) => {
                        event.stopPropagation();
                        gerenciarFavorito();
                    }}
                    className={`${styles.coracao} ${favorito ? styles.coracaoAtivo : ""}`}
                    aria-label={favorito ? "Remover favorito" : "Adicionar favorito"}
                >
                    {favorito ? "♥" : "♡"}
                </button>
            </article>

            <Modal
                isOpen={modalAberto}
                onClose={() => setModalAberto(false)}
                foto={foto}
                nome={nome}
                casa={casa}
                especie={especie}
                patrono={patrono}
                dataNascimento={dataNascimento}
                corOlhos={corOlhos}
                corCabelo={corCabelo}
                ator={ator}
                vivo={vivo}
            />
        </>
    );
}