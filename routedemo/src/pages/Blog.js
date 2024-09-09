import axios from 'axios';

export async function getStaticProps() {
  try {
    // Fetch posts from the jsonplaceholder API
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default function Blog({ posts }) {
  if (posts.length === 0) {
    return <div>No posts available.</div>;
  }

  return (
    <div>
      <h1>This is an example of Static Site Generation SSG</h1>
      <h2>Blog</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
