import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../../store/globalState";
import { ContainerListPlaylist } from "./Style";
import CreatePlaylist from "./CreatePlaylist";
const ListPlaylist = () => {
  const { states, requests } = useContext(GlobalStateContext);
  const { playlistList } = states;
  const [isGlassEffect, setIsGlassEffect] = useState(true);
  const [isAddPlaylist, setisAddPlaylist] = useState(false);
  useEffect(() => {
    // Chama a função para buscar playlists do usuário ao montar o componente
    requests.playlistFromUser();
    console.log('====================================');
    console.log(playlistList);
    console.log('====================================');
  }, []);


  const addPlaylist = () => {
    setisAddPlaylist(true);
  };

  return (
    <ContainerListPlaylist glassEffect={isGlassEffect}>
      <h2>Playlists:</h2>
      <button onClick={addPlaylist}>Create Playlist</button>
      {isAddPlaylist && <CreatePlaylist onClose={() => setisAddPlaylist(false)} />}
      {Object.values(playlistList).map((playlist, index) => (
          <li key={`${playlist.id}-${index}`}>
            <strong>{playlist.title}</strong> - {playlist.artist}
          </li>
        ))}
    </ContainerListPlaylist>
  );
};

export default ListPlaylist;
