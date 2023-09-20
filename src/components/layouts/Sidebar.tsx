import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const menu = [
  {key: 'aa', label: 'Home'}
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

  const[show, setShow] = useState(false)

  const handleSubMenuClick = () => {
    setShow(true)
  }
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items1} />
      </Header>
      <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={200} theme="dark" >
      <Menu
        mode="vertical"
        theme="dark"
        // defaultOpenKeys={['sub2']}
        // selecteedKeys={[selectedSubmenuItem]}
        onClick={handleSubMenuClick}
      >
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Menu 2">
          <Menu.Item key="/subitem1">
            <Link to="/sidecontent">Subitem 1</Link>
          </Menu.Item>
          <Menu.Item key="/subitem2">
            <Link to="/subitem2">Subitem 2</Link>
          </Menu.Item>
          <SubMenu key="sub3" title="Submenu 3">
            <Menu.Item key="/subsubitem1">
              <Link to="/subsubitem1">Sub-subitem 1</Link>
            </Menu.Item>
            <Menu.Item key="/subsubitem2">
              <Link to="/subsubitem2">Sub-subitem 2</Link>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
        <Menu.Item key="/dashboard" icon={<UserOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="/notifications" icon={<NotificationOutlined />}>
          <Link to="/notifications">Notifications</Link>
        </Menu.Item>
      </Menu>
    </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 880,
              background: colorBgContainer,
            }}
          >
            
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};


export default Sidebar;
