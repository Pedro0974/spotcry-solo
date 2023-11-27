import React, { useState } from "react";
import {
    getPlaylistsFromUser,

} from '../services/playlist'

const GlobalStateContext = React.createContext()

const GlobalState = (props) => {
    // Criação de todos os estados globais
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [playlistList, setPlaylistList] = useState([]);
    const [songsList, setSongsList] = useState([]);

    // Criação de todas as requisições feitas na aplicação
    const playlistFromUser = () => {
        getPlaylistsFromUser()
    };

    const getAllPlayslist = () => {

    }


    // criação dos componentes consumers
    const states = { isMenuOpened, playlistList, songsList}
    const setters = { setIsMenuOpened, setPlaylistList, setSongsList}
    const requests = {getAllPlayslist, playlistFromUser}

    // Provider do estado => recebe componentes que precisam das informações como filhos
    return (
        <GlobalStateContext.Provider value={{states, setters, requests}}>
            { props.children }
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;