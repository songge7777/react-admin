import Layout from '@/pages/layout';
import noFound from '@/pages/404';

export interface routeType {
  path: string
  component?: any
  element?: any
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
    element: Layout,
    meta: {
      title: "",
    },
    children: [
      {
        path: "home",
          children:[
          {
            path: "list",
            component: () => import("@/pages/home/list"),
          }
        ]
      },
      {
        path: "sub",
        children:[
          {
            path: "one",
            component: () => import("@/pages/sub/one"),
          },
          {
            path: "two",
            component: () => import("@/pages/sub/two"),
          }
        ]
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
    element: Layout,
    children:[
      {
        path: "*",
        element: noFound
      },
    ],
    meta: {
      title: "404"
    }
  }
];

export default routes;