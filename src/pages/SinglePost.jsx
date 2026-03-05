import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function SinglePost() {
  const { id } = useParams(); // Получаем id из адресной строки
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Ошибка загрузки:", error));
  }, [id]);

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <br />
      <Link to="/posts">Назад к списку</Link>
    </div>
  );
}

export default SinglePost;