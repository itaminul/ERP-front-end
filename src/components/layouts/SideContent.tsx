import { Content } from "antd/es/layout/layout";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const SideContent = () => {
    return (
        <>
        <div>

        <Sidebar  />
        </div>
        <div className="ant-row"  style={{justifyContent: 'relative'}}>
        <Content
         className="ant-col ant-col-xs-24 ant-col-xl-8"
         style={{
            paddingLeft: 40,
            margin: 0,
            marginTop: '-850px',
            maxWidth: '90%',
            justifyContent: 'relative'
          }}
          >
            
            ttttt
            ddddddddd    
            ddddddddd
            ddddddddd
           
            ddddddddd
            
            ddddddddd
            ddddddddd
          </Content>
        </div>
        
            
        </>
    )
}

export default SideContent;