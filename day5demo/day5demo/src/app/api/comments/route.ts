import { comments } from "@/app/comments/comments";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// GET: Fetch all comments
export async function GET() {
    return NextResponse.json(comments);
}

// POST: Add a new comment
export async function POST(request: NextRequest) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: "New request",
    };
    comments.push(newComment);

    return NextResponse.json(newComment, { status: 201 });
}
