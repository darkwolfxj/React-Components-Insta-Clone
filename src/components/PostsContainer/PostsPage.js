//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";
import Comments from '../CommentSection/Comment'
// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">

      {/* map through data here */}
        {props.data.map(i =>{ 
            return (<Post post={i}/>)
        })}
        
    
    </div>
  );
};

export default PostsPage;

