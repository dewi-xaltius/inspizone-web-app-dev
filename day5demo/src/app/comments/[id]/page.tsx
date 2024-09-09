import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const CommentDetail = () => {
    const [comment, setComment] = useState<any>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            const fetchComment = async () => {
                const response = await fetch(`/api/comments/${id}`);
                const data = await response.json();
                setComment(data);
            };

            fetchComment();
        }
    }, [id]);

    if (!comment) return <div>Loading...</div>;

    return (
        <div>
            <h1>Comment ID: {comment.id}</h1>
            <p>{comment.text}</p>
        </div>
    );
};

export default CommentDetail;