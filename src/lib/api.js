import axios from "axios";

const api = axios.create({
  baseURL: "https://potterapi-fedeperin.vercel.app/en",
});

export const charactersStorageKey = "personagens-potterapi";

export async function fetchCharacters() {
  const { data } = await api.get("/characters");

  if (!Array.isArray(data)) {
    throw new Error("A API retornou uma lista de personagens inválida.");
  }

  return data.map((personagem) => ({
    id: personagem.index,
    name: personagem.fullName,
    house: personagem.hogwartsHouse,
    actor: personagem.interpretedBy,
    image: personagem.image,
    dateOfBirth: personagem.birthdate,
  }));
}
