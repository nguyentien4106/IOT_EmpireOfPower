import React, { useEffect, useState } from 'react';
import { Flex, Layout, Menu, Typography, theme } from 'antd';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSession, setSession } from '../helper/utils';
import logo from '../assets/logo-no-background.png';
const { Sider, Content, Header } = Layout;

const getIcon = (link, icon) => <Link to={link}><FontAwesomeIcon icon={icon} /></Link>

const items = [
  {
      key: 'status',
      icon: getIcon('/status', "fa-solid fa-battery-half"),
      label: 'Status',
  },
  {
      key: 'energy',
      icon: getIcon('/energy', "fa-solid fa-signal"), 
      label: 'Energy',
  },
  {
      key: 'array',
      icon: getIcon('/array', "fa-solid fa-solar-panel"),
      label: 'Array',
  },
  {
      key: 'menu',
      icon: getIcon('/menu', "fa-solid fa-bars"), 
      label: 'Menu',
  }
]

const isMobile = window.screen.width < 768

export function AppLayout() {
    const [collapsed, setCollapsed] = useState(isMobile);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();

    const handleLogout = () => {
      setSession("isAuth", false)
      navigate("/login")      
    }

    const handleClickMenu = e => {
      setCurrentKey(e.key)
      navigate(`/${e.key}`)
    }

    const [currentKey, setCurrentKey] = useState('status')

    return (
      <>
        <Layout 
            style={{
                minHeight: '100vh',
            }}>
            <Header collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="demo-logo-vertical">
                    <img src={logo} height={48}></img>
                </div>
                {
                    !isMobile ? (
                        <Menu
                    theme="dark"
                    mode="horizontal"
                    items={items}
                    onClick={handleClickMenu}
                    selectedKeys={[currentKey]}
                />
                    ) : "no"
                }
                <div>
                    {getSession("username")}
                    <FontAwesomeIcon size='2x' icon="fa-solid fa-right-from-bracket" onClick={handleLogout} className='pointer'/>
                </div>
            </Header>
            <Layout>
                <Content
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: 20,
                    }}
                >
                    <Outlet></Outlet>
                </Content>
            </Layout>

        </Layout>
      </>
    )
}

export default AppLayout;