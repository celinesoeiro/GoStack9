import React from 'react';

function PostHeader({author,date}){
  return(
    <div className="post-header">
      <img className="post-avatar" src={author.avatar}/>
      <div className = "details">
        <span>{author.name}</span>
        <span className="date">{date}</span>
      </div>
    </div>
  );
}

function PostBody({comments}){
  return(
    <div className = "post-body">
      <div className = "divider" />
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img className="post-avatar" src={comment.author.avatar}/>
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
    </div>
  );
}

function Post({author,date,content,comments}){
  return(
    <div className="post">
      <PostHeader author={author} date={date}/>
      <p className="post-content">{content}</p>
      <PostBody comments={comments}/>
    </div>
  );
}

export default Post;