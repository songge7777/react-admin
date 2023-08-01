
import lazyLoad from "@/utils/lazyLoad";
import * as React from "react";
import { GetRouteData, MetaRouters } from "@/routers/interface";

export const t = (a:RegExpMatchArray ,b:string) => a.map((item)=>{
  const r = {
    id:b,
    path:item,
    element: lazyLoad(React.lazy(() => import(b))),
    currentRouteList:a
  };
  return r;
});
// 二维素组 转成dom 树
export const createTreeFromArray = (arr:GetRouteData[][])=> {
  const cache:any = {};
  const root = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const path = arr[i][j].path;
      const id = arr[i][j].id;
      const element = arr[i][j].element;
      const currentRouteList = arr[i][j].currentRouteList;
      if (!cache[id]) {
        const _path = path ===currentRouteList[0] ?`/${path}`:path;
        cache[path] = element ? {
          path:_path,
          id,
          element:element
        } : {
          path,
          id,
        };
      }
      if (j > 0) {
        const parent = cache[arr[i][j - 1].path];
        parent.children ? "" : parent.children = [];
        if (parent.children.indexOf(cache[path]) < 0) {
          parent.children.push(cache[path]);
        }
      } else {
        if (root.indexOf(cache[path]) < 0) {
          root.push(cache[path]);
        }
      }
    }
  }
  return root;
};