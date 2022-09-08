import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
