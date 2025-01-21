import React from 'react';
import {useFetch} from '../useFetch';
import styles from './DataDisplay.module.scss'
interface Post {
  id: number;
  title: string;
  body: string;
}

export const DataDisplay: React.FC = () => {
  const { data, loading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.dataDisplay}>
      <h1>Fetched Posts</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


