import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Comments = ({ id }) => {
  const [comments, setComments] = useState();

  useEffect(() => {
    axios.get(`${process.env.API_BLOG}/post/${id}/comments`).then((resp) => {
      setComments(resp.data);
    });
  }, []);

  return !comments ? (
    <div>
      <a>Cargar comentarios</a>
    </div>
  ) : (
    <div>
      {comments.map((item) => {
        return (
          <div>
            <p>{item.email}</p>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

Comments.propTypes = {};

export default Comments;
