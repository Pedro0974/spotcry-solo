import React from "react";
import NavBarApp from "../components/NavBarApp/NavBarApp";
import styled from "styled-components";
import background from "../_assets/pexels-edoardo-tommasini-2034851.jpg";
import ListPlaylist from "../components/ListPlaylist/ListPlaylist";
import AllSongs from "../components/ListAllSongs/AllSongs";
import PlayerMusic from "../components/PlayerMusic/PlayerMusic";

const ContainerFeed = styled.div`
  display: flex;
  background-image: url(${background});
  width: 100%;
  height: 100vh;
  background-size: cover;

  & div {
    display: flex;
    flex-direction: column;
  }
`;
const FeedPage = () => {
  return (
    <ContainerFeed>
      <NavBarApp />
      <div>
        <ListPlaylist />
        <AllSongs />
        <PlayerMusic />
      </div>
    </ContainerFeed>
  );
};

export default FeedPage;
