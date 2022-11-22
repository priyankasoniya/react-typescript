export type routeJSONObject = {
  name?: string;
  path: string;
  locale?: string;
  component?: string;
  hideInMenu?: boolean;
  exact?: boolean;
  routes?: routeJSONObject[];
  accessTO?: [string];
  icon?: string;
  parentKey?: string;
  key?: string;
  redirect?: string;
  expand?: boolean;
};

export const RouteJSON: routeJSONObject[] = [
  {
    locale: "user.login",
    path: "/login",
    component: "./User/Login",
    hideInMenu: true,
  },
  {
    path: "/home",
    component: "./HomePage",
    icon: "home",
    name: "Home",
  },
  {
    path: "dashboard",
    locale: "dashboard",
    name: "Dashboard",
    icon: "dashboard",
    component: "./Pages/Dashboard",
    expand: true,
    exact: true,
    routes: [
      {
        path: "/dashboard/analysis",
        locale: "dashboard.analysis",
        name: "Analysis",
        component: "./Pages/Dashboard/Analysis",
        exact: true,
        accessTO: ["admin"],
      },
      {
        path: "/dashboard/monitor",
        locale: "dashboard.monitor",
        component: "./Pages/Dashboard/Monitor",
        name: "Monitor",
      },
      {
        path: "/dashboard/workbench",
        locale: "dashboard.workbench",
        component: "./Pages/Dashboard/Workbench",
        name: "Workbench",
      },
    ],
  },
  {
    path: "projects",
    locale: "projects",
    name: "Projects",
    icon: "list_alt",
    redirect: "/projects/list",
    routes: [
      {
        path: ":id",
        locale: "projects.details",
        component: "./Project/ProjectDetails",
        name: "Project Details",
        hideInMenu: true,
        icon: "projects",
        key: "projects",
      },
      {
        path: "/projects/:id/settings",
        locale: "projects.settings",
        icon: "settings",
        name: "Settings",
        parentKey: "details",
      },
    ],
  },
  {
    path: "projects/list",
    locale: "projects.list",
    component: "./Project/Projects",
    icon: "search",
  },
  {
    path: "*",
    component: "./PageNotFound",
  },
];

//removed exact key
//modified nested routes path
