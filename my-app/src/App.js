import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <NavBar />
        <ItemListContainer />
      </div>
    </ChakraProvider>
  );
}

export default App;
