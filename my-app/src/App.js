import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <NavBar />
      </div>
    </ChakraProvider>
  );
}

export default App;
