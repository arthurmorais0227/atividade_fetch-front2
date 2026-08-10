"use client"
import styles from "./personagens.module.css";
import axios from "axios";
import CharacterCard from "@/components/CharacterCard/CharacterCard";
import { useState, useEffect } from "react";

export default function Personagens() {
    const [personagens, setPersonagens] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState("");

    const buscarPersonagens = async () => {
        setCarregando(true);
        setErro("");

        try {
            const { data } = await axios.get("https://hp-api.onrender.com/api/characters");
            setPersonagens(data);
            console.log(data);
        } catch {
            setErro("Erro ao carregar personagens");
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        buscarPersonagens();
    }, []);

    return (
        <main className={styles.main}>
            { carregando && <p className={styles.carregando}>Carregando...</p> }
            { erro && <p>{erro}</p> }

            { !carregando &&
                !erro &&
                personagens.map(personagem => <CharacterCard 
                    key={personagem.id} 
                    foto={personagem.image} 
                    nome={personagem.name} 
                    casa={personagem.house} 
                    ator={personagem.actor} 
                    especie={personagem.species}
                    patrono={personagem.patronus}
                    dataNascimento={personagem.dateOfBirth}
                    corOlhos={personagem.eyeColour}
                    corCabelo={personagem.hairColour}
                    vivo={personagem.alive}
                    />)

            }
        </main>
    );
}