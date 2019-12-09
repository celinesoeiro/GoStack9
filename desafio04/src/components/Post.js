import React from 'react';

function postHeader({author,date}){
  return(
    <div className="post-header">
      <img className="post-avatar" src={author.avatar}/>
      <div className = "post-header-details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function postBody({comments}){
  return(
    <div className = "post-body">
      {comments.map(comment => 
        <div key={comment.id}>
          <img className="post-avatar" src={comment.author.avatar}/>
          <p className="comment-p">
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>)}  
    </div>
  );
}

function Post({author,date,content,comments}){
  return(
    <div className="post">
      <postHeader author={author} date={date}/>
      <p className="content-p">{content}</p>
      <postBody comments={comments}/>
    </div>
  );
}

export default Post;