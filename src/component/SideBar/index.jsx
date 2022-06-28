import React from "react";
import { Layout, Image } from "antd";

import logo from '../../images/vj.svg';

import "./index.scss"

const { Sider } = Layout;

const SideBar = ({ menu }) => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <img
                className='logo'
                src={logo}
                alt="logo"
            />
            {/* <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["4"]}
                items={[
                    UserOutlined,
                    VideoCameraOutlined,
                    UploadOutlined,
                    UserOutlined
                ].map((icon, index) => ({
                    key: String(index + 1),
                    icon: React.createElement(icon),
                    label: `nav ${index + 1}`
                }))}
            /> */}
            {menu}
        </Sider>
    );
};
export default SideBar;