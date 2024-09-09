type User={
    id:number;
    name:string;
    email:string;
    username:string;
    address:{
        street:string;
        city:string;
    }
}
export default async function UserPage()
{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const users:User[]=await response.json()
    
    return(
        <div>
            <h1>User List</h1>
            <ul>
            {
                users.map((user)=>(
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Usename: {user.username}</p>
                        <p>Address: {user.address.street}, {user.address.city}</p>
                    </li>
                ))
            }</ul>
        </div>
    )
}