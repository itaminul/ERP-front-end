import React from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumb, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { type RootState } from '../../redux/store/store';

const Breadcrumbs: React.FC = () => {
  const breadcrumbs = useSelector(
    (state: RootState) => state.breadcrumbs.breadcrumbs
  );
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <>
      {isAuthenticated && (
        <Layout>
          {breadcrumbs.map((breadcrumb) => (
            <Breadcrumb key={breadcrumb.label} style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>
                <Link to={breadcrumb.homePath}>{breadcrumb.home}</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          ))}
        </Layout>
      )}
    </>
  );
};

export default Breadcrumbs;
