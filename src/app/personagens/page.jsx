"use client"
import styles from "./page.module.css";
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
            {personagens.map(personagem => <CharacterCard key={personagem.id} foto={personagem.image} nome={personagem.name} casa={personagem.house} ator={personagem.actor} />)}
        </main>
    );
}