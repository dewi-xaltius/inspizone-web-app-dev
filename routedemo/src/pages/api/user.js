import axios from 'axios';

export async function getServerSideProps() {
  try {
    // Fetch user data from the jsonplaceholder API
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    const userData = response.data;

    return {
      props: {
        userData,
      },
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
        props: {
            userData:[],
          },
        };
      }
    }
    
    export default function User({ userData }) {
        if (userData.length === 0) {
            return <div>No user data available.</div>;
      }
    
      return (
        <div>
          <h1>This is an example of Server Side Render</h1>
          <h2>User Dashboard</h2>
          <ul>
        {userData.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Address: {user.address.street}, {user.address.city}</p>
          </li>
        ))}
      </ul>
        </div>
      );
    }
    