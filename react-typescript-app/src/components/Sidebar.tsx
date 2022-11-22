import { routeJSONObject } from "./RouteJSON";
import { useNavigate } from "react-router-dom";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import { useContext, useState } from "react";
import "./sidebar.scss";
import { AppContext } from "../App";

type sideBarProps = {
  RouteJSON: routeJSONObject[];
};

const Sidebar = (props: sideBarProps) => {
  const navigate = useNavigate();
  const { currentPage, updateCurrentPage } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const returnList = (routes: routeJSONObject[]) => {
    return routes.map(
      (route, index) =>
        route.name && (
          <ListItemButton
            key={index}
            onClick={(e) => {
              if (!route.expand) {
                e.stopPropagation();
                navigate(route.path);
                updateCurrentPage && updateCurrentPage(route.name as string);
              }
            }}
            className={currentPage === route.name ? "active" : ""}
          >
            <ListItemText>
              <span
                style={{ float: "left", paddingTop: 2 }}
                className="material-symbols-outlined"
              >
                {route.icon}
              </span>
              {route.name}
              {route.expand && route.routes && (
                <span
                  style={{ float: "right", paddingTop: 2 }}
                  className="material-symbols-outlined"
                  onClick={() => {
                    setOpen((open) => !open);
                  }}
                >
                  {open ? "expand_less" : "expand_more"}
                </span>
              )}
              <Collapse in={open} timeout="auto" unmountOnExit>
                {route.expand && route.routes && returnList(route.routes)}
              </Collapse>
            </ListItemText>
          </ListItemButton>
        )
    );
  };

  return (
    <div id="sidebar">
      <List>{returnList(props.RouteJSON)}</List>
    </div>
  );
};

export default Sidebar;
