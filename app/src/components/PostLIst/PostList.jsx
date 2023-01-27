import React from 'react';
import PostItem from '../PostItem/PostItem';
import style from "./PostList.module.css"

const PostList = ({posts}) => {
  return <div className={style.wrap}>
        {posts.map(post => <PostItem posts={post} key={post.id}/>)}
  </div>;
};

export default PostList;
