type details = {
  createdBy: string;
  description: string;
};

export type projectJSONObject = {
  projectName: string;
  id: number;
  details: details;
};

export const projectJSON: projectJSONObject[] = [
  {
    id: 12345,
    projectName: "First Project",
    details: {
      createdBy: "admin",
      description: "dummy project 1",
    },
  },
  {
    id: 23456,
    projectName: "Second Project",
    details: {
      createdBy: "dev_user",
      description: "dummy project 2",
    },
  },
];
