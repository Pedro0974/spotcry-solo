import React, { useEffect, useState } from "react";
import AppRouter from "./routes/Router";
import GlobalStyle from "./styles/Styles";
import GlobalState from "./store/globalState";
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedLoadingValue = localStorage.getItem("isLoading");
      setIsLoading(storedLoadingValue === "true");
    };

    window.addEventListener("storage", handleStorageChange);

    handleStorageChange();
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); 

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <GlobalStyle />
      <GlobalState>
        <AppRouter />
      </GlobalState>
    </>
  );
}

export default App;
