import {FC} from 'react';
import { UserProfile } from "./types"
const user:UserProfile ={
    id:1,
    name:'John',
    email:'John@ggg.com',
    age:23,
}

const UserPage: FC = ()=>
{
    return(
        <div>
            <h1>{user.name}'s Profile</h1>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}
export default UserPage;