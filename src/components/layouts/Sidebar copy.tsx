import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { Link } from 'react-router-dom';
import Title from 'antd/es/typography/Title';
import { Footer } from 'antd/es/layout/layout';

const { Header, Content, Sider } = Layout;
const menu = [
  { key: 'aa', label: 'Home' }
]
const items1: MenuProps['items'] = menu

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const Sidebar: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [show, setShow] = useState(false)

  const handleSubMenuClick = () => {
    setShow(true)
  }
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Title style={{ color: 'white' }} level={3}>ERP</Title>
      </Header>
      <Layout>
        <Sider width={200} theme="dark">
          <Menu mode="inline"
            theme="dark"
            defaultSelectedKeys={['Daashbord']}
            style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="Dasboard">
              Dashbord
            </Menu.Item>
            <SubMenu key="sub1" title="Setup">
              <Menu.Item key="1">
                <Link to="/sidecontent">Side Content</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/submenu1/item2">Submenu 1 - Item 2</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Submenu 2">
              <Menu.Item key="3">
                <Link to="/submenu2/item1">Submenu 2 - Item 1</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/submenu2/item2">Submenu 2 - Item 2</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="4">
              <Link to="/submenu2/item2">Submenu 2 - Item 2</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/submenu2/item2">Submenu 2 - Item 2</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/submenu2/item2">Submenu 2 - Item 2</Link>
            </Menu.Item>

          </Menu>
        </Sider>

        <Layout>

          <Content
            style={{ padding: '0 50px' }}
          >
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>

            <div style={{ background: "#fff", padding: 24, minHeight: 580 }}>
              Content
              
              
              </div>

          </Content>

        </Layout>


      </Layout>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};


export default Sidebar;
