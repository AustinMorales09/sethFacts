import React, { useState, useEffect } from "react";
import Facts from "./facts";
// import Wave from '../src/wave.svg';

const Posts = (props) => {
  const [post, setPost] = useState({ title: "yo", content: "contnt" });
  console.log(props);

  let id = props.match.params.post_id;

  const fact = Facts.filter((fact) => fact.id === id);
  console.log(fact);

  useEffect(() => {
    setPost(fact[0]);
  }, [fact]);

  return (
    <div className="factDiv">
      <div className="postDiv">
        <h1>{!post ? post.title : "loading..."}</h1>
        <p>{!post ? "loading..." : post.content}</p>
      </div>
    </div>
  );
};

export default Posts;
