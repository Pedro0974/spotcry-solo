import React, { useState, useEffect } from "react";
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
export const GlobalStateContext = React.createContext();

const GlobalState = (props) => {
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
  const playlistFromUser = async () => {
    const playlists = await getPlaylistsFromUser();
    setPlaylistList(playlists);
  };

  // criar playlist do usuario
  const createPlaylistFromUser = async (token, playlistData) => {
    await createPlaylist(token, playlistData);
    // Atualizar a lista de playlists após a criação
    await playlistFromUser();
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
  const songsListRequest = async (token) => {
    const songs = await getAllSongs(token);
    setSongsList(songs);
  };

  // adicionar uma nova musica
  const createNewSong = async (token, songData) => {
    await createSong(token, songData);
    await songsListRequest()
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
