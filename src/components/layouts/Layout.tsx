import { setBreadcrumbs } from '../../redux/features/breadcrumbSlice';
import { Layout, Menu } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import './activestyle.css';
const { Header, Content, Sider } = Layout;
interface PrvateRouteProps {
  children: React.ReactNode;
}
// eslint-disable-next-line react/prop-types
const AppLayout: React.FC<PrvateRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // breadcrumbs
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        {
          home: 'Dashboard',
          homePath: '/dashboard',
          label: 'Summary',
          path: '/dashboard',
        },
      ])
    );
  }, [dispatch]);

  // active menu class
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleMenuClick = (e: any) => {
    setSelectedKeys([e.key]);
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleSubMenuOpenChange = (openKeys: string[]) => {
    setOpenKeys(openKeys);
  };
  // locout
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.setItem('isAuthenticated', 'false');
    navigate('/');
    window.location.reload();
  };

  return (
    <Layout>
      {isAuthenticated && (
        <Header className="header">
          <div className="logo" style={{ color: 'white' }}>
            ITAminul
          </div>
        </Header>
      )}
      <Layout>
        {isAuthenticated && (
          <Sider width={200} theme="dark">
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={selectedKeys}
              openKeys={openKeys}
              onClick={handleMenuClick}
              onOpenChange={handleSubMenuOpenChange}
            >
              <Menu.Item key="dashboard">
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item>
              <Menu.SubMenu key="submenu1" title="Setup">
                <Menu.Item key="subItem1-1">
                  <Link to="/item-setup">Item</Link>
                </Menu.Item>
                <Menu.Item key="subItem1-2">
                  <Link to="/contact">Contact</Link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="about">
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="contact">
                <Link to="/contact">Contact</Link>
              </Menu.Item>
              <Menu.Item key="test">
                <Link to="/test">Test</Link>
              </Menu.Item>
              <Menu.Item key="logout" onClick={handleLogout}>
                Logout
              </Menu.Item>
            </Menu>
          </Sider>
        )}
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumbs />
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 580,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    </Layout>
  );
};

export default AppLayout;
