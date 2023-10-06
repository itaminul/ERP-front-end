// Layout.tsx

import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

const { Sider, Content } = Layout;

const Sidebar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('dashboard');

  const handleMenuItemClick = (key) => {
    setSelectedMenuItem(key);
  };

  return (
    <Sider width={200} theme="dark">
      <Menu
        mode="vertical"
        theme="dark"
        selectedKeys={[selectedMenuItem]}
        onClick={({ key }) => { handleMenuItemClick(key.toString()); }}
      >
        <Menu.Item key="dashboard" icon={<UserOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="profile" icon={<LaptopOutlined />}>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="notifications" icon={<NotificationOutlined />}>
          <Link to="/notifications">Notifications</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const Dashboard = () => <div>Dashboard content</div>;
const Profile = () => <div>Profile content</div>;
const Notifications = () => <div>Notifications content</div>;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ padding: '20px' }}>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/notifications" component={Notifications} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
