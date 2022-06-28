import React, { useState } from "react";
import { Layout } from "antd";

// import TopicMenu from "../TopicMenu";
import MenuList from "../MenuList";
import NavBar from "../NavBar";
import SideBar from "../SideBar";

import "./index.scss";

// const Dotenv = require('dotenv-webpack');

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
        <div className="App">
            <NavBar menu={Menu} />
            <Layout>
                <SideBar menu={Menu} />
                <Layout.Content className="content">
                    {topics[contentIndex]}
                </Layout.Content>
            </Layout>
        </div>
    );
}

export default App;