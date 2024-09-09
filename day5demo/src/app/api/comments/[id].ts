import { comments } from "@/app/comments/comments";
import { NextResponse } from "next/server";

// Dynamic API route to fetch a single comment by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const comment = comments.find((comment) => comment.id === parseInt(id, 1));

    if (comment) {
        return NextResponse.json(comment);
    } else {
        return NextResponse.json({ message: 'Comment not found' }, { status: 404 });
    }
}