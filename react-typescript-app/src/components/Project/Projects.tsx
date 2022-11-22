import { List, ListItemButton, ListItemText } from "@mui/material";
import { projectJSON } from "./ProjectsJSON";
import { useNavigate } from "react-router-dom";

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <List>
        {projectJSON.map((project) => (
          <ListItemButton
            key={project.id}
            onClick={() => {
              navigate(`${project.id}`);
            }}
          >
            <ListItemText>{project.projectName}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default Projects;
