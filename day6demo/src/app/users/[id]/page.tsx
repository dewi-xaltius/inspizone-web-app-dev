"use client"
import { useState,useEffect } from "react";
import { useParams } from "next/navigation"
const UserDetail=()=>{
    const{id}=useParams();
    const[user,setUser]=useState<any>(null)

useEffect(()=>{
    if(id){
        const fetchUser=async ()=>{
            try{
                const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                if(response.ok)
                {
                    const data=await response.json();
                    setUser(data);
                    console.log(data)
                }
                else{
                    console.error('Failed to fetch the data')
                }

            }catch(error)
            {
                console.error('Error fetching the data',error)
            }
        };
        fetchUser();
    }
},[id])

if(!user) return <h1>Loading.......</h1>
return(
    <div>
        <h1>User Details</h1>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>phone: {user.phone}</p>
    </div>
)
}
export default UserDetail