import { Breadcrumb, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
interface Breadcrumb {
    home: string,
    label: string;
    link: string;
    list: string
  }
const BreadcrambsIndex: React.FC<Breadcrumb> = ({ home, label, link, list}) => {
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>{home}</Breadcrumb.Item>
                <Breadcrumb.Item>{label}</Breadcrumb.Item>
                <Breadcrumb.Item>{list}</Breadcrumb.Item>
            </Breadcrumb>

        </>
    )
}

export default BreadcrambsIndex;