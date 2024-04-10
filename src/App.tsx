import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import Routes from "./routes/Routes";
function App() {
  return (
    <>
      <NextUIProvider>
        <Routes />
      </NextUIProvider>
    </>
  );
}

export default App;
