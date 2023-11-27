import Router from "./routes/Router";
import GlobalStyle from "./styles/Styles";
import GlobalState from "./store/globalState";

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </>

  );
}

export default App;
