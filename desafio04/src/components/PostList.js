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
            content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
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
        content: 'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
             name: 'Diego Fernandes',
             avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '06 Jun 2019',
            content: 'Que bom, Lucas!'
          },
          {
            id: 5,
            author: {
              name: 'Celine Soeiro',
              avatar: 'https://avatars1.githubusercontent.com/u/52112166?s=460&v=4'
            },
            date: '07 Jun 2019',
            content: 'Realmente é muito bom! Também estou fazendo.'
          }
        ]
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