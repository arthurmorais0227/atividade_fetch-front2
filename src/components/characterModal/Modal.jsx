"use client";

import Image from "next/image";
import styles from "./Modal.module.css";

export default function Modal({
  isOpen,
  onClose,
  foto,
  nome,
  casa,
  especie,
  patrono,
  dataNascimento,
  corOlhos,
  corCabelo,
  ator,
  vivo,
}) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <button type="button" className={styles.fechar} onClick={onClose}>
          ✕
        </button>

        <div className={styles.conteudo}>
          <div className={styles.imagemBox}>
            <Image
              src={foto || "/images/sem-foto.png"}
              alt={nome || "Personagem"}
              width={180}
              height={240}
              className={styles.imagem}
            />
          </div>

          <div className={styles.info}>
            <h3>{nome || "Personagem"}</h3>
            <div className={styles.grid}>
              <div>
                <span>Casa</span>
                <p>{casa || "Não informado"}</p>
              </div>
              <div>
                <span>Espécie</span>
                <p>{especie || "Não informado"}</p>
              </div>
              <div>
                <span>Patrono</span>
                <p>{patrono || "Não informado"}</p>
              </div>
              <div>
                <span>Data de nascimento</span>
                <p>{dataNascimento || "Não informado"}</p>
              </div>
              <div>
                <span>Cor dos olhos</span>
                <p>{corOlhos || "Não informado"}</p>
              </div>
              <div>
                <span>Cor do cabelo</span>
                <p>{corCabelo || "Não informado"}</p>
              </div>
              <div>
                <span>Ator/Atriz</span>
                <p>{ator || "Não informado"}</p>
              </div>
              <div>
                <span>Status</span>
                <p>{vivo === true ? "Vivo" : vivo === false ? "Morto" : "Não informado"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
