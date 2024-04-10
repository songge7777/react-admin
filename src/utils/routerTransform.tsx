import { Layout, Menu, theme, MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
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
