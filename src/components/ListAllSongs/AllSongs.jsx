import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../../store/globalState";
import { ContainerListSongs } from "./Style";

const AllSongs = () => {
  const { states, requests } = useContext(GlobalStateContext);
  const { songsList } = states;
  const [isGlassEffect, setIsGlassEffect] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    requests.songsListRequest(token);
  }, []);

  return (
    <ContainerListSongs glassEffect={isGlassEffect}>
      <h1>All Songs:</h1>
      <ul>
        {Object.values(songsList).map((song, index) => (
          <li key={`${song.id}-${index}`}>
            <strong>{song.title}</strong> - {song.artist}
          </li>
        ))}
      </ul>
    </ContainerListSongs>
  );
};

export default AllSongs;
