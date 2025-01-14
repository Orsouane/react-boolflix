import { useState } from "react";
// importo il header
import Header from "./Components/Header";
// import il main
import Main from "./Components/Main";
import "./index.css";

import { GlobalProvider } from "./Context/GlobalContext";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Main />
      </GlobalProvider>
    </>
  );
}

export default App;
