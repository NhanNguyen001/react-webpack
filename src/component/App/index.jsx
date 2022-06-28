import React, { useState } from "react";
import { Layout } from "antd";

// import TopicMenu from "../TopicMenu";
import MenuList from "../MenuList";
import NavBar from "../NavBar";
import SideBar from "../SideBar";

import "./index.scss";

const { Content } = Layout;

function App() {
    const topics = ["First topic", "Second topic", "Third topic"];
    const [contentIndex, setContentIndex] = useState(0);
    const [selectedKey, setSelectedKey] = useState("0");
    const changeSelectedKey = (event) => {
        const key = event.key;
        setSelectedKey(key);
        setContentIndex(+key);
    };

    const Menu = (
        <MenuList />
    );

    return (
        <Layout style={{ height: "100vh" }}>
            <SideBar menu={Menu} />
            {/* <Content className="content">
                {topics[contentIndex]}
            </Content> */}
        </Layout>
        // <div className="App">
        // <NavBar menu={Menu} />
        // </div>
    );
}

export default App;