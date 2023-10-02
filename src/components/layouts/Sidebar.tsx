import React from 'react';
// import {
//   LaptopOutlined,
//   NotificationOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { Link } from 'react-router-dom';
import Title from 'antd/es/typography/Title';
import { Footer } from 'antd/es/layout/layout';
import BreadcrambsIndex from '../Breadcrambs/BreadcrambsIndex';

const { Header, Content, Sider } = Layout;
// const menu = [{ key: 'aa', label: 'Home' }];
// const items1: MenuProps['items'] = menu;

// const items2: MenuProps['items'] = [
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// ].map((icon, index) => {
//   const key = String(index + 1);

//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,

//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });

const Sidebar: React.FC = () => {
  // const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const [show, setShow] = useState(false);

  // const handleSubMenuClick = () => {
  //   setShow(true);
  // };

  const breadcrumbData = [
    {
      home: 'Home',
      label: 'Supplier Setup',
      link: '/supplier-setup',
      list: 'List',
    },
  ];

  return (
    <Layout>
      <Header>
        <Title style={{ color: 'white' }}>ERP LOGO</Title>
      </Header>

      <Layout>
        <Sider width={200} style={{ minHeight: '100%' }} theme="dark">
          <Menu
            mode="inline"
            defaultSelectedKeys={['Daashbord']}
            style={{
              height: '100%',
              borderRight: 0,
              background: colorBgContainer,
            }}
          >
            <Menu.Item key="Dasboard">Dashbord</Menu.Item>
            <SubMenu key="sub1" title="Setup">
              <Menu.Item key="1">
                <Link to="/supplier-setup">Supplier</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout>
          <Content style={{ padding: '0 30px' }}>
            <BreadcrambsIndex {...breadcrumbData[0]} />
            <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
              {/* <AppRoutes /> */}
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    </Layout>
  );
};

export default Sidebar;
