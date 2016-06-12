import React from 'react';
import PostListItem from './post_list_item';

const PostList = (props) => {
  const postItems = props.posts.map((post) => {
    return <PostListItem key={post.id} post={post} onRemovePost={props.onRemovePost} />
  });

  return (
    <ul className="list-group">
      {postItems}
    </ul>
  )
}

export default PostList;
