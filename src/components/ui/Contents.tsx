"use client";

import {ReactNode} from "react";
import { Layout } from "antd";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
const { Content } = Layout;

const Contents = ({ children }: { children: ReactNode }) => {
  const base = []
  return (
    <Content style={{minHeight: "100vh", color: "black"}}>
      <UMBreadCrumb items={[
        {
          label: `admin`,
          link: `/${base}`
        },
        {
          label: `student`,
          link: `/${base}/student`
        }
      ]}/>
      {children}
    </Content>
  );
}

export default Contents;