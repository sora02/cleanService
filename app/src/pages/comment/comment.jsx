import React from "react";
import { useState } from "react";
import style from './comment.module.css'
import config from "../../config/config";
import PostList from "../../components/PostLIst/PostList";

const Comment = () => {
    const TAB_MENU = ["후기", "질문", "비포애프터"];
    const [clickedTab, setClickedTab] = useState('후기');
    const clickTab = (item) => {
        setClickedTab(item)
    }
    return <div className={style.container}>
        <div className={style.tabContainer}>
            {TAB_MENU.map((item, idx) => <button
                key={idx} 
                onClick={() => clickTab(item)} 
                active={clickedTab === item}
                className={style.tabItem}
            >{item}</button>)}
        </div>
        {clickedTab === "비포애프터" ? (
            <h1>아직 사진이 없습니다.</h1>
        ) : clickedTab === "후기" ? (
            <PostList posts={config}/>
        ) : (
            <h1>아직 질문이 없습니다.</h1>
        )}
    </div>;
}

export default Comment;