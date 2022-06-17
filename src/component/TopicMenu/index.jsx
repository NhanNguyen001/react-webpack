import React from "react";
import { Menu } from "antd";

const { Item } = Menu;

const TopicMenu = ({ topics, selectedKey, changeSelectedKey }) => {
    const styledTopics = [];
    topics.forEach((topic, index) =>
        styledTopics.push(
            <Item 
                key={index} 
                onClick={changeSelectedKey}>
                {topic}
            </Item>
        )
    );

    return (
        <Menu 
            mode="inline" 
            selectedKeys={[selectedKey]}
            theme='dark'
        >
            {styledTopics}
        </Menu>
    );
}
export default TopicMenu;