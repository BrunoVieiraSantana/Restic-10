import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Leon S. Kennedy",
      comments: "Esse curso é simplesmente sensacional!",
      avatar: "img/03.png"
    },
    {
      id: 2,
      user: "Jill Valentine",
      comments: "Estou impressionada com a qualidade do curso!",
      avatar: "img/01.png"
    },
    {
      id: 3,
      user: "Claire Redfield",
      comments: "Não poderia concordar mais, Jill!",
      avatar: "img/05.png"
    },
    {
      id: 4,
      user: "Crish Redfield",
      comments: "Realmente, Claire e Jill, vocês têm toda razão!",
      avatar: "img/02.png"
    },
    {
      id: 5,
      user: "Ashley Graham",
      comments: "As aulas de autodefesa contra DIVs são excelentes. ",
      avatar: "img/04.png"
    }
  ]);

  return (
    <>
      <div>
        <Header />
        {posts.map(post => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default App;
