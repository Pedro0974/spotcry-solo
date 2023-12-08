import React, { useState, useEffect} from "react";
import { getAllSongs } from "../../services/songs";

const AllSongs = () => {
    const [allSongs, setAllSongs] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token')
        getAllSongs(token).then(songs => {
            setAllSongs(songs)
            })
    }, [])

    return (
        <>
        </>
    )
};

export default AllSongs;