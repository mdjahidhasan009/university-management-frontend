import {ReactNode, FC} from "react";
import { Layout } from 'antd';
import Sidebar from "@/components/ui/Sidebar";
import Contents from "@/components/ui/Contents";
const DashboardLayout: FC = ({children}:{children: ReactNode}) => {

  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>
        {children}
      </Contents>
    </Layout>
  );
};

export default DashboardLayout;