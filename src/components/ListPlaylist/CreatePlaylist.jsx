import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GlobalStateContext } from "../../store/globalState";

const ContainerModalCreatePLaylist = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  width: 50%;
  padding: 1rem;
  border-radius: 15px;
  backdrop-filter: ${(props) => (props.glassEffect ? "blur(10px)" : "none")};
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${(props) =>
    props.glassEffect ? "rgba(255, 255, 255, 0.04)" : "transparent"};

  & h1 {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }
  & div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;
  }
  & label {
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }

  & input, textarea {
    width: 80%;
  }
  
`;

const CreatePlaylist = ({ onClose }) => {
    const { requests } = useContext(GlobalStateContext);
    const [playlistName, setPlaylistName] = useState("");
    const [playlistDescription, setPlaylistDescription] = useState("");
    const [isGlassEffect, setIsGlassEffect] = useState(true);
  
    const handleCreatePlaylist = async () => {
      try {
        const token = localStorage.getItem('token')
        await requests.createPlaylistFromUser(token,
          {
            name: playlistName,
            description: playlistDescription,
          }
        );
  
        // Resetar os campos e fechar o modal
        setPlaylistName("");
        setPlaylistDescription("");
        onClose();
      } catch (error) {
        console.error("Erro ao criar a playlist:", error);
        // Trate o erro conforme necessário
      }
    };
  
    return (
      <ContainerModalCreatePLaylist glassEffect={isGlassEffect}>
        <div>
          <h1>Criar Playlist</h1>
          <button className="btn" type="button" onClick={handleCreatePlaylist}>
            Criar Playlist
          </button>
        </div>
        <form>
          <div>
            <label>Nome da Playlist:</label>
            <input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
            />
          </div>
          <div>
            <label>Descrição:</label>
            <textarea
              value={playlistDescription}
              onChange={(e) => setPlaylistDescription(e.target.value)}
            />
          </div>
        </form>
      </ContainerModalCreatePLaylist>
    );
  };
  
  export default CreatePlaylist;