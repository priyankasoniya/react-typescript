import { Breadcrumbs } from "@mui/material";
import { useLocation, Link, useNavigate } from "react-router-dom";

import "./breadcrumbs.scss";

const BreadcrumbsComponent: React.FC = () => {
  const navigate = useNavigate();
  const pathnames = useLocation()
    .pathname.split("/")
    .filter((path) => path);
  const lastIndex = pathnames.length - 1;

  return (
    <Breadcrumbs separator=">">
      {pathnames.map((pathname, index) => (
        <a
          onClick={() => {
            if (lastIndex !== index) {
              navigate(pathname);
            }
          }}
          className={lastIndex === index ? "inactive-link" : "active-link"}
          key={index}
        >
          {pathname.substring(0, 1).toUpperCase() + pathname.substring(1)}
        </a>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
