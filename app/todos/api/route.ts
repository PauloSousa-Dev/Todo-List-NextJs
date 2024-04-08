import dbConnect from '@/lib/mongodb';
import Todo from "./models/Todo"


export async function GET() {
  await dbConnect();
  const posts = await Todo.find({});
   
    return Response.json({ posts })
  }