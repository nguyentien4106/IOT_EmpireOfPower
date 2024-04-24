import React, { useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const items = [
  {
      key: '1',
      icon: <Link to={`/status`} />,
      label: 'Status',
  },
  {
      key: '2',
      icon: <Link to={`/energy`} />,
      label: 'Energy',
  },
  {
      key: '3',
      icon: <Link to={`/array`} />,
      label: 'Array',
  },
  {
      key: '4',
      icon: <Link to={`/menu`} />,
      label: 'Menu',
  }
]

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

export function AppLayout({ children = "Content", user }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  return (
    <>
      <Header style={headerStyle}>Empire of Power</Header>
      <Layout style={{
        minHeight: '100vh',
      }}>
          <Sider  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={items}
            />
          </Sider>
          <Layout>
            <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
            >
                {
                  children
                }
            </Content>
          </Layout>
      </Layout>
    </>
  )
}

export default AppLayout;