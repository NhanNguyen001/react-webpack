import React, { useState } from "react";
import { Layout } from "antd";

import TopicMenu from "../TopicMenu";
import NavBar from "../NavBar";
import SideBar from "../SideBar";

import "./index.scss";

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
        <TopicMenu
            topics={topics}
            selectedKey={selectedKey}
            changeSelectedKey={changeSelectedKey}
        />
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