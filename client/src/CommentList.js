import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ comments }) => {
  const renderedComments = Object.values(comments).map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul>{renderedComments}</ul>;
};
