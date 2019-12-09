import React, {Component} from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Celine Soeiro',
          avatar: 'https://avatars1.githubusercontent.com/u/52112166?s=460&v=4'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '04 Jun 2019',
            content: 'Comentário de Diego'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Lucas José Mendes',
          avatar: 'https://avatars0.githubusercontent.com/u/6298034?s=460&v=4'
        },
        date: '05 Jun 2019',
        content: 'Fala de Lucas',
        comments: []
      }
    ]
  };
  render(){
    const {posts} = this.state;
    return (
      <div className="post-list">
        {posts.map(post => (<Post key={post.id} {...post} />))}
      </div>      
    );
  }
}

export default PostList;