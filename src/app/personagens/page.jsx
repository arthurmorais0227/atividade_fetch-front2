'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '@/components/CharacterCard/CharacterCard';
import styles from './personagens.module.css';
import { Pagination, Tabs } from 'antd';
import toast from 'react-hot-toast';

export default function Personagens() {
    const [personagens, setPersonagens] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const [tema, setTema] = useState('light');

    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState('');

    const [paginaAtual, setPaginaAtual] = useState(1);

    const itensPorPagina = 10;

    const buscarPersonagens = async () => {
        try {
            setLoading(true);

            console.log('🔄 Iniciando busca na API...');

            const response = await axios.get('https://hp-api.onrender.com/api/characters');

            console.log(
                '📡 Resposta da API:',
                response.status,
                response.data.length,
                'personagens',
            );

            sessionStorage.setItem('personagens', JSON.stringify(response.data));

            console.log('💾 Personagens salvos no SessionStorage');

            setPersonagens(response.data);
        } catch (error) {
            console.error('❌ Erro na busca:', error.message);

            setErro('Erro ao carregar personagens');
        } finally {
            setLoading(false);

            console.log('🏁 Loading finalizado');
        }
    };

    const alterarFavorito = (personagem) => {
        try {
            console.log('⭐ Alterando favorito:', personagem.name);

            const jaExiste = favoritos.some((favorito) => favorito.id === personagem.id);

            let novosFavoritos;

            if (jaExiste) {
                novosFavoritos = favoritos.filter((favorito) => favorito.id !== personagem.id);

                toast(`${personagem.name} removido dos favoritos`);
            } else {
                novosFavoritos = [...favoritos, personagem];

                toast.success(`${personagem.name} marcado como favorito!`);
            }

            localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));

            const idsFavoritos = novosFavoritos.map((favorito) => favorito.id);

            sessionStorage.setItem('favoritos', JSON.stringify(idsFavoritos));

            setFavoritos(novosFavoritos);
        } catch (error) {
            console.error('❌ Erro ao alterar favorito:', error.message);
        }
    };

    useEffect(() => {
        console.log('🚀 Componente montado...');

        const personagensSalvos = sessionStorage.getItem('personagens');

        if (personagensSalvos) {
            const dados = JSON.parse(personagensSalvos);

            setPersonagens(dados);

            console.log('📂 Personagens carregados do SessionStorage:', dados.length);
        } else {
            console.log('📭 Nenhum personagem encontrado no SessionStorage');

            buscarPersonagens();
        }

        const favoritosSalvos = localStorage.getItem('favoritos');

        if (favoritosSalvos) {
            const dados = JSON.parse(favoritosSalvos);

            setFavoritos(dados);

            console.log('📂 Favoritos carregados do LocalStorage:', dados.length);
        } else {
            console.log('📭 Nenhum favorito encontrado');
        }

        const cookies = document.cookie.split(';');

        for (let cookie of cookies) {
            const [chave, valor] = cookie.trim().split('=');

            if (chave === 'tema') {
                setTema(valor);

                console.log('🎨 Tema carregado do Cookie:', valor);
            }
        }
    }, []);

    useEffect(() => {
        const atualizarTema = (event) => setTema(event.detail);
        window.addEventListener('temaAlterado', atualizarTema);

        return () => window.removeEventListener('temaAlterado', atualizarTema);
    }, []);

    const indiceInicial = (paginaAtual - 1) * itensPorPagina;

    const indiceFinal = indiceInicial + itensPorPagina;

    const personagensPaginados = personagens.slice(indiceInicial, indiceFinal);

    return (
        <main className={`${styles.main} ${tema === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.cabecalho}>
                <h1>Personagens</h1>
            </div>

            {loading && <p className={styles.carregando}>Carregando...</p>}

            {erro && <p className={styles.erro}>{erro}</p>}

            {!loading && !erro && (
                <Tabs
                    defaultActiveKey="todos"
                    onChange={() => setPaginaAtual(1)}
                    items={[
                        {
                            key: 'todos',

                            label: `Todos (${personagens.length})`,

                            children: (
                                <>
                                    <div className={styles.grid}>
                                        {personagensPaginados.map((personagem) => (
                                            <CharacterCard
                                                key={personagem.id}
                                                personagem={personagem}
                                                favorito={favoritos.some(
                                                    (favorito) => favorito.id === personagem.id,
                                                )}
                                                alterarFavorito={alterarFavorito}
                                            />
                                        ))}
                                    </div>

                                    <div className={styles.paginacao}>
                                        <Pagination
                                            simple
                                            current={paginaAtual}
                                            pageSize={itensPorPagina}
                                            total={personagens.length}
                                            showSizeChanger={false}
                                            onChange={setPaginaAtual}
                                        />
                                    </div>
                                </>
                            ),
                        },

                        {
                            key: 'favoritos',

                            label: `Favoritos (${favoritos.length})`,

                            children:
                                favoritos.length === 0 ? (
                                    <div className={styles.semFavoritos}>
                                        <h2>Nenhum personagem foi favoritado.</h2>

                                        <p>
                                            Clique no coração de um personagem para adicioná-lo aos
                                            favoritos.
                                        </p>
                                    </div>
                                ) : (
                                    <div className={styles.grid}>
                                        {favoritos.map((personagem) => (
                                            <CharacterCard
                                                key={personagem.id}
                                                personagem={personagem}
                                                favorito={true}
                                                alterarFavorito={alterarFavorito}
                                            />
                                        ))}
                                    </div>
                                ),
                        },
                    ]}
                />
            )}
        </main>
    );
}
