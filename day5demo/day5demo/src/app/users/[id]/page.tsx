// app/users/[id]/page.tsx
"use client"; // This makes the component a Client Component

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const UserDetails = () => {
    const { id } = useParams(); // useParams gives you the dynamic route parameters
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        if (id) {
            const fetchUser = async () => {
                try {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                    if (response.ok) {
                        const data = await response.json();
                        setUser(data);
                    } else {
                        console.error('Failed to fetch user');
                    }
                } catch (error) {
                    console.error('Error fetching user:', error);
                }
            };

            fetchUser();
        }
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Details</h1>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
        </div>
    );
};

export default UserDetails;
