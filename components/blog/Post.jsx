import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title} </h2>
      <p>{post.body} </p>
      <span>{`Escrito por el usuario ${post.userId}`}</span>
        <Link href={`/blog/${post.id}`}><a>Leer mas</a></Link>
    </div>
  );
};

Post.propTypes = {};

export default Post;
