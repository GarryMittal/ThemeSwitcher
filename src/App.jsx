import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setTheme] = useState("light");
  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };

  //actual change in theme

  useEffect(() => {
    const componentToChangeDOM = document.querySelector("html");
    componentToChangeDOM.classList.remove("light", "dark");
    componentToChangeDOM.classList.add(themeMode);
  }, [themeMode]);

  //above this useffect has no relation with context as of now

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto"></div>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
