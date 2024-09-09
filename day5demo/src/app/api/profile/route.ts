import {NextResponse} from 'next/server';
const Users=[
    {id:1,name:'John',email:'john@ggg.com'},
    {id:1,name:'John',email:'john@ggg.com'},
    {id:1,name:'John',email:'john@ggg.com'},
]
export async function GET()
{
    return NextResponse.json({Users})
}