import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10)); // Берем только первые 10 постов
        setIsLoading(false);
      })
      .catch((error) => console.error("Ошибка загрузки:", error));
  }, []);

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '15px' }}>
            <strong>{post.title}</strong>
            <br />
            <Link to={`/posts/${post.id}`}>Читать далее</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;