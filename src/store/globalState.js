import React, { useState } from "react";
import {
  getPlaylistsFromUser,
  createPlaylist,
  addSongToPlaylist,
  editPlaylist,
  removeTrackFromPlaylist,
  deletePlaylistById,
} from "../services/playlist";
import {
    createSong,
    getAllSongs,
    getSong,
    editSong,
    deleteSong
} from "../services/songs";

import { login } from '../services/users'
const GlobalStateContext = React.createContext();

const GlobalState = (props) => {
  // Criação de todos os estados globais
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [playlistList, setPlaylistList] = useState([]);
  const [songsList, setSongsList] = useState([]);

  // Criação de todas as requisições feitas na aplicação

  // requisição de login
  const userLogin = (body, navigate) => {
    login(body, navigate)
  }


  // requisições relacionadas a playlist
  // buscar playlist do usuario
  const playlistFromUser = (userId) => {
    getPlaylistsFromUser(userId);
  };

  // criar playlist do usuario
  const createPlaylistFromUser = (token, playlistData) => {
    createPlaylist(token, playlistData);
  };

  // adicionar musica a uma playlist especifica
  const addSongAtPlaylist = (token, playlistId, songId) => {
    addSongToPlaylist(token, playlistId, songId);
  };

  // editar detalhes de uma playlist
  const editPlaylistDetails = (token, playlistId, updateDetails) => {
    editPlaylist(token, playlistId, updateDetails);
  };

  // remover musica de uma playlist
  const removeSongFromPlaylist = (token, playlistId, songId) => {
    removeTrackFromPlaylist(token, playlistId, songId);
  };

  // deletar uma playlist especifica
  const deletePlaylist = (token, playlistId) => {
    deletePlaylistById(token, playlistId);
  };

  // requisições relacionadas as musicas
  // busca lista de musicas
  const songsListRequest = (token) => {
    getAllSongs(token);
  };

  // adicionar uma nova musica
  const createNewSong = (token, songData) => {
    createSong(token, songData);
  };

  // buscar uma musica especifica
  const getSongById = (token, songId) => {
    getSong(token, songId);
  };

  // editar detalhes de uma musica
  const editMusicDetails = (token, songId, updateDetails) => {
    editSong(token, songId, updateDetails);
  };

  // deletar musica
  const deleteMusic = (token, songId) => {
    deleteSong(token, songId);
  };

  // criação dos componentes consumers
  const states = { isMenuOpened, playlistList, songsList };
  const setters = { setIsMenuOpened, setPlaylistList, setSongsList };
  const requests = {
    createPlaylistFromUser,
    playlistFromUser,
    addSongAtPlaylist,
    editPlaylistDetails,
    removeSongFromPlaylist,
    deletePlaylist,
    songsListRequest,
    createNewSong,
    getSongById,
    editMusicDetails,
    deleteMusic,
    userLogin
  };

  // Provider do estado => recebe componentes que precisam das informações como filhos
  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
