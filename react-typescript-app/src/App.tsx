import { Grid } from "@mui/material";
import "./App.scss";
import BreadcrumbsComponent from "./components/BreadcrumbsComponent";
import Routing from "./components/Routing";
import Sidebar from "./components/Sidebar";
import { RouteJSON } from "./components/RouteJSON";
import { useState, createContext } from "react";

type AppContextType = {
  currentPage: string;
  updateCurrentPage?: (pageName: string) => void;
};
export const AppContext = createContext<AppContextType>({
  currentPage: "Home",
});

const App: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState("Home");

  const updateCurrentPage = (pageName: string) => {
    setCurrentPage(pageName);
  };

  return (
    <Grid id="main-container">
      <AppContext.Provider value={{ currentPage, updateCurrentPage }}>
        <header>
          <BreadcrumbsComponent />
        </header>
        <Grid container className="content">
          {open && (
            <Grid item xs={2}>
              <Sidebar RouteJSON={RouteJSON} />
            </Grid>
          )}
          <Grid item xs={open ? 10 : 12}>
            <Routing RouteJSON={RouteJSON} />
          </Grid>
        </Grid>
      </AppContext.Provider>
    </Grid>
  );
};

export default App;
