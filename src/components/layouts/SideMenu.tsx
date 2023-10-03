import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import SubMenu from 'antd/es/menu/SubMenu';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <>
      <Layout>
        <Layout>
          <Sider width={200} style={{ minHeight: '100%' }} theme="dark">
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={['Daashbord']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="Dasboard">Dashbord</Menu.Item>
              <SubMenu key="sub1" title="Setup">
                <Menu.Item key="1">
                  <Link to="/supplier">Supplier</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="#">Submenu 1 - Item 2</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="Submenu 2">
                <Menu.Item key="3">
                  <Link to="#">Submenu 2 - Item 1</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="#">Submenu 2 - Item 2</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="4">
                <Link to="#">Submenu 2 - Item 2</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="#">Submenu 2 - Item 2</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="#">Submenu 2 - Item 2</Link>
              </Menu.Item>
            </Menu>
          </Sider>
        </Layout>
      </Layout>
    </>
  );
};

export default SideMenu;
