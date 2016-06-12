import React from 'react';

const PostListItem = (props) => {
  const imageUrl = 'http://placehold.it/40x40';

  return (
    <li className="list-group-item">
      <div className="media">
        <div className="media-left">
          <img className="media-object" data-src="holder.js/64x64" src={imageUrl} />
        </div>

        <div className="media-body">
          <div>
            <div className="post-by">{props.post.postBy}</div>
            <div className="post-date">
              <span className="glyphicon glyphicon-calendar"></span>
              {props.post.date}
            </div>
          </div>
          <span
            onClick={event => props.onRemovePost(props.post)}
            className="glyphicon glyphicon-remove remove"></span>
        </div>
        <div className="post-description">
          {props.post.post}
        </div>
      </div>
    </li>
  )
}

export default PostListItem;
