'use client';
import styles from './personagens.module.css';
import axios from 'axios';
import CharacterCard from '@/components/CharacterCard/CharacterCard';
import { useState, useEffect } from 'react';
import { Pagination, ConfigProvider } from 'antd';

export default function Personagens() {
    const [personagens, setPersonagens] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    const [paginaAtual, setPaginaAtual] = useState(1);
    const [itensPorPagina] = useState(10);

    const buscarPersonagens = async () => {
        setCarregando(true);
        setErro('');

        try {
            const { data } = await axios.get('https://hp-api.onrender.com/api/characters');
            setPersonagens(data);
        } catch {
            setErro('Erro ao carregar personagens');
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        buscarPersonagens();
    }, []);

    const indiceInicial = (paginaAtual - 1) * itensPorPagina;
    const indiceFinal = indiceInicial + itensPorPagina;
    const personagensPaginados = personagens.slice(indiceInicial, indiceFinal);

    return (
        <main className={styles.main}>
            {carregando && <p className={styles.carregando}>Carregando...</p>}
            {erro && <p>{erro}</p>}

            {!carregando && !erro && (
                <>
                    <div className={styles.grid}>
                        {personagensPaginados.map((personagem) => (
                            <CharacterCard
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
                            />
                        ))}
                    </div>

                    <div
                        style={{
                            marginTop: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                        }}>
                            {/* baixei esse provider para poder estilizar a paginação e mudar as cores dos números */}
                        <ConfigProvider
                            theme={{
                                components: {
                                    Pagination: {
                                        colorBgContainer: '#1e293b',
                                        itemBg: '#1f2937',
                                        colorText: '#ffffff',
                                        colorTextDisabled: '#4b5563',
                                        colorPrimary: '#9333ea',
                                        colorPrimaryHover: '#a855f7',
                                    },
                                },
                            }}>
                            <Pagination
                                simple
                                showSizeChanger={false}
                                current={paginaAtual}
                                pageSize={itensPorPagina}
                                total={personagens.length}
                                onChange={(pagina) => setPaginaAtual(pagina)}
                            />
                        </ConfigProvider>
                    </div>
                </>
            )}
        </main>
    );
}
