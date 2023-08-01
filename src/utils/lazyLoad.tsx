/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
import * as  React from "react";

const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <React.Suspense
      fallback={
        <div>loading....</div>
      }
    >
      <Comp />
    </React.Suspense>
  );
};

export default lazyLoad;
