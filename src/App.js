import AppRouter from "./routes/Router";
import GlobalStyle from "./styles/Styles";
import GlobalState from "./store/globalState";


function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalState>
        <AppRouter />
      </GlobalState>
    </>

  );
}

export default App;
