
import * as React from "react";
import Routes from "@/router/index";
import "@/styles/pages/home/layout.scss";
import { Outlet } from "react-router-dom";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, MenuProps } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];

const { useState } = React;
const { Header, Content, Footer, Sider } = Layout;


function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}


const items: MenuItem[] = [
  getItem("抖音小程序", "home", <MailOutlined />, [
    getItem("数据列表", "list"),
  ]),

  // getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
  //   getItem("Option 5", "5"),
  //   getItem("Option 6", "6"),
  //   getItem("Submenu", "sub3", null, [getItem("Option 7", "7"), getItem("Option 8", "8")]),
  // ]),

  // getItem("Navigation Three", "sub4", <SettingOutlined />, [
  //   getItem("Option 9", "9"),
  //   getItem("Option 10", "10"),
  //   getItem("Option 11", "11"),
  //   getItem("Option 12", "12"),
  // ]),
];


const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState("list");
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    const r = e.keyPath[1];
    const r2 = e.keyPath[0];
    setCurrent(e.key);
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
            defaultOpenKeys={["home"]}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
              {/* <Routes /> */}
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;