// You will add code in this file

import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import Comments from '../CommentSection/Comment';
import dummydata from '../../dummy-data'

import "./Posts.css";

const Post = props => {
  // set up state for the likes

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection post={props} />
      {props.post.comments.map(i =>
        <Comments comment={i}/>
        )}
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
