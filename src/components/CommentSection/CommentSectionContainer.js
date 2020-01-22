// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
    const [comment, setComment]=useState(props.comments)
  return (
    <div>
        {props.comments.map(i =>
        <Comment comment={i}/>)}
        <CommentInput />
    </div>
  )
}

export default CommentSection;
