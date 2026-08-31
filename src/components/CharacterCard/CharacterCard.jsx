"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./CharacterCard.module.css";
import Modal from "@/components/characterModal/Modal";

export default function CharacterCard({
    personagem,
    favorito,
    alterarFavorito,
}) {
    const [modalAberto, setModalAberto] = useState(false);
    const [tema, setTema] = useState("light");

    useEffect(() => {
        try {
            const cookies = document.cookie.split(";");

            for (let cookie of cookies) {
                const [chave, valor] = cookie.trim().split("=");

                if (chave === "tema") {
                    setTema(valor);
                    break;
                }
            }
        } catch (error) {
            console.error("Erro ao ler tema:", error.message);
        }
    }, []);

    return (
        <>
            <article
                className={`${styles.card} ${tema === "dark" ? styles.dark : styles.light}`}
                onClick={() => setModalAberto(true)}
            >
                <Image
                    className={styles.imagem}
                    src={personagem.image || "/images/sem-foto.png"}
                    width={130}
                    height={130}
                    alt={personagem.name || "Personagem"}
                />

                <p className={styles.nome}>
                    {personagem.name}
                </p>

                <p className={styles.texto}>
                    {personagem.house || "Sem casa"}
                </p>

                <p className={styles.texto}>
                    {personagem.actor || "Sem ator"}
                </p>

                <button
                    type="button"
                    className={`${styles.coracao} ${favorito ? styles.coracaoAtivo : ""}`}
                    onClick={(event) => {
                        event.stopPropagation();
                        alterarFavorito(personagem);
                    }}
                    aria-label={favorito ? "Remover favorito" : "Adicionar favorito"}
                >
                    {favorito ? "♥" : "♡"}
                </button>
            </article>

            <Modal
                isOpen={modalAberto}
                onClose={() => setModalAberto(false)}
                foto={personagem.image}
                nome={personagem.name}
                casa={personagem.house}
                especie={personagem.species}
                patrono={personagem.patronus}
                dataNascimento={personagem.dateOfBirth}
                corOlhos={personagem.eyeColour}
                corCabelo={personagem.hairColour}
                ator={personagem.actor}
                vivo={personagem.alive}
            />
        </>
    );
}