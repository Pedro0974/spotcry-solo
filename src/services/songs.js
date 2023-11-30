import axios from "axios";
import { BASE_URL } from "../constants/urls";

// Função para obter todas as músicas disponíveis
export const getAllSongs = async (token) => {
  try {
    const response = await axios.get(BASE_URL, {
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

// Função para adicionar uma nova música à plataforma
export const createSong = async (token, songData) => {
  try {
    const response = await axios.post(BASE_URL, songData, {
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

// Função para obter detalhes de uma música específica
export const getSong = async (token, songId) => {
  try {
    const url = `${BASE_URL}/${songId}`;
    const response = await axios.get(url, {
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

// Função para editar os detalhes de uma música existente
export const editSong = async (token, songId, updatedDetails) => {
  try {
    const url = `${BASE_URL}/${songId}`;
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

// Função para excluir uma música da plataforma
export const deleteSong = async (token, songId) => {
  try {
    const url = `${BASE_URL}/${songId}`;
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
