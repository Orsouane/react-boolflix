// import il main
import MainMovie from "./Components/MainMovie";
import MainSerie from "./Components/MainSerie";
// IMPORT CSS FILE
import "./index.css";
// HOME PAGE FILE
import Home from "./Pages/Home";
// IMPORT THE GLOBAL PROVIDER
import { GlobalProvider } from "./Context/GlobalContext";
// INTEGRATION OF THE ROUTING SYSTEM
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./Layout/DefaultLayout"
function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home} />
              <Route path="/MainMovie" Component={MainMovie} />
              <Route path="/MainSerie" Component={MainSerie} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
