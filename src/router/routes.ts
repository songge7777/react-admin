export interface routeType {
  path: string
  component?: any
  children?: Array<routeType>
  meta?: {
    title?: string
    needLogin?: boolean
  }
  redirect?: string
}

const routes: Array<routeType> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    component: () => import("@/pages/home/index"),
    meta: {
      title: "",
    },
    children: [
      {
        path: "/homeList",
        component: () => import("@/pages/home/list"),
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/pages/login"),
    meta: {
      title: "",
    }
  },
  {
    path: "*",
    component: () => import("@/pages/login"),
    meta: {
      title: "404"
    }
  }
];

export default routes;