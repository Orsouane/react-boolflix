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

        <div className="container bg-black text-white mt-3">
          <Main />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
