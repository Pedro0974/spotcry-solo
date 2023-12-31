import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { getTokenData } from "./getTokenData";

export const getPlaylistsFromUser = () => {
  const token = localStorage.getItem("token");
  const userId = getTokenData(token).id;
  // userId = getTokenData(token).id;
  // .get(`${BASE_URL}user/${userId}/playlists`, {
  return axios.get(`${BASE_URL}user/${userId}/playlists`, {
    headers: {
      Authorization: token,
    },
  });
};

// Criação da playlist do usuario
export const createPlaylist = async (token, playlistData) => {
  try {
    const userId = getTokenData(token).id;
    
    // Adicione o ID do usuário ao corpo da requisição
    const requestData = {
      userId,
      description: playlistData.description,
      name: playlistData.name,
      songs: [],
    };

    const response = await axios.post(`${BASE_URL}playlist`, requestData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};


// Função para adicionar uma música a uma playlist específica
export const addSongToPlaylist = async (token, playlistId, songId) => {
  try {
    const url = `${BASE_URL}/${playlistId}/song`;
    const response = await axios.post(
      url,
      { songId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

// Função para editar os detalhes de uma playlist
export const editPlaylist = async (token, playlistId, updatedDetails) => {
  try {
    const url = `${BASE_URL}/${playlistId}`;
    const response = await axios.patch(url, updatedDetails, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

// Função para remover uma música específica de uma playlist
export const removeTrackFromPlaylist = async (token, playlistId, songId) => {
  try {
    const url = `${BASE_URL}/${playlistId}/song/${songId}`;
    const response = await axios.delete(url, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

// Função para excluir uma playlist específica
export const deletePlaylistById = async (token, playlistId) => {
  try {
    const url = `${BASE_URL}/${playlistId}`;
    const response = await axios.delete(url, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};
