"use client";

import {  Layout, Menu } from 'antd';
import {useState} from "react";
import {sidebarItems} from "@/constants/sidebarItems";
import {USER_ROLE} from "@/constants/role";
const {  Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const role = USER_ROLE.SUPER_ADMIN;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        top: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      />
      University management
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
    </Sider>
  )
}

export default Sidebar;