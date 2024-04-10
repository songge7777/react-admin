
import * as React from "react";
import "@/styles/pages/layout.scss";
import { Outlet } from "react-router-dom";
import { Layout, Menu, theme, MenuProps } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useNavigate,useLocation } from "react-router-dom";
import {getItem} from '../utils/routerTransform'
type MenuItem = Required<MenuProps>["items"][number];

const { useState, useEffect } = React;
const { Header, Content, Footer, Sider } = Layout;

const items: MenuItem[] = [
  getItem("抖音小程序", "home", <MailOutlined />, [
    getItem("数据列表", "list"),
  ]),

  getItem("Navigation Two", "sub", <AppstoreOutlined />, [
    getItem("导航一", "one"),
    getItem("导航二", "two"),
  ]),

];

const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [current, setCurrent] = useState("list");
  const navigate = useNavigate();
  const location = useLocation()
  
  useEffect(() => {
    const path = location.pathname;
    const arrName = path.split('/')
    const key = arrName[arrName.length-1]
    setCurrent(key);
  },[location])

  const onClick: MenuProps["onClick"] = (e) => {
    const r = e.keyPath[1];
    const r2 = e.keyPath[0];
    navigate(`/${r}/${r2}`);
  };

  return (
    <div className="layout_home">
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
          }}
          onCollapse={(collapsed, type) => {
          }}
        >
          <div className="logo" />
          <Menu
            className="layout_menu"
            theme={"dark"}
            onClick={onClick}
            defaultOpenKeys={["home","sub"]}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default React.memo(Home);