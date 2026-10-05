'use client';

import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Modal from '@/components/characterModal/Modal';

export default function PersonagemDetalhe() {
    const { id } = useParams();
    const router = useRouter();
    const [personagem, setPersonagem] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        let ativo = true;

        const buscarPersonagem = async () => {
            try {
                const personagensSalvos = sessionStorage.getItem('personagens');
                const listaSalva = personagensSalvos ? JSON.parse(personagensSalvos) : [];
                let encontrado = listaSalva.find((item) => String(item.id) === String(id));

                if (!encontrado) {
                    const response = await axios.get(
                        `${process.env.NEXT_PUBLIC_API_URL}/api/characters`,
                    );
                    encontrado = response.data.find((item) => String(item.id) === String(id));
                }

                if (ativo) {
                    if (encontrado) {
                        setPersonagem(encontrado);
                    } else {
                        setErro('Personagem não encontrado.');
                    }
                }
            } catch {
                if (ativo) setErro('Não foi possível carregar este personagem.');
            } finally {
                if (ativo) setCarregando(false);
            }
        };

        buscarPersonagem();

        return () => {
            ativo = false;
        };
    }, [id]);

    if (carregando) return <main><p>Carregando personagem...</p></main>;
    if (erro || !personagem) return <main><p>{erro || 'Personagem não encontrado.'}</p></main>;

    return (
        <Modal
            isOpen
            onClose={() => router.push('/personagens')}
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
    );
}