"use client"
import { useState } from 'react';

const CommentPage = () => {
    const [comments, setComments] = useState<any[]>([]);

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    };

    return (
        <div>
            <button onClick={fetchComments}>Load Comments</button>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default CommentPage;

