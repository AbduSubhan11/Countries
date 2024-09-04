import "./App.css";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../Context/themeContext";

function App() {


  return (
    <>
        <ThemeProvider  >
          <Header />
          {/* Outlet include Home and CountryDetails Components */}
          <Outlet />
        </ThemeProvider>
    </>
  );
}

export default App;
