import axios from 'axios';
export async function getServerSideProps()
{
    try
    {
        const response=await axios.get('https://jsonplaceholder.typicode.com/users/1');
         const UserData=response.data;

         return{
            props:{
                UserData,
            },
         }
    }catch(error)
    {
        console.log('Error fetching user data:',error)
        return{
            props:{
                UserData:null,
            }
        }
    }
}


export default function User({UserData})
{
    if(!UserData)
    return
    {
    return <div> Error loading user data</div>
    }
    return(
        <div>
            <h1>This is an example of server side render</h1>
            <h2>User Dashboard</h2>
            <p>Welcome, {UserData.name}</p>
            <p>You email is, {UserData.email}</p>
            <p>Your Username is, {UserData.username}</p>
        </div>
    )
}