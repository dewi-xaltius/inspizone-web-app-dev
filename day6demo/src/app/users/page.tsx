"use client"
import { useState,useEffect } from "react";
import Link from 'next/link';
const UserPage=()=>
{
    const[users,setusers]=useState<any[]>([]);
    useEffect(()=>{
        const fetchUser=async()=>{
            try
            {
                const response=await fetch('https://jsonplaceholder.typicode.com/users')
                const data=await response.json()
                setusers(data);
            }
            catch(error)
            {
                console.error('Error fetching data',error)
            }
        }
        fetchUser();
    },[])

    return(
        <div>
            <h1>List of Users</h1>
            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                            {user.name}
                            </Link>
                        </li>
                    ))
                }

            </ul>
            
        </div>
    )
}
export default UserPage