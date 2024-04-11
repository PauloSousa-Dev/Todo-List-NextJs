import dbConnect from '@/lib/mongodb';
import Todo from './models/Todo';
import { ObjectId } from 'mongodb';

export async function GET() {
  await dbConnect();
  const posts = await Todo.find().sort({ createAt: -1 });

  return Response.json({ posts });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log('HEY', data);

  await dbConnect();
  const todo = await Todo.create(data);
  return Response.json(todo);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  console.log('request body', id);
  try {
    if (!id) throw new Error('ID is required.');
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return new Response(JSON.stringify({ message: 'Todo not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({
        message: 'Todo deleted successfully',
        data: deletedTodo,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Now TypeScript knows `error` is of type Error
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      // Handle cases where the error is not an instance of Error

      return new Response(
        JSON.stringify({
          message: 'An unknown error occurred',
          errorData: error?.message,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }
  }
}

export async function PATCH(request: Request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const id = formData.get('id');

  console.log('data', data);

  await dbConnect();
  try {
    const todo = await Todo.findByIdAndUpdate(id, data, {
      new: true,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200, // OK status
    });
  } catch (e) {
    return new Response(JSON.stringify({ success: false, error: e.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500, // Internal Server Error
    });
  }
}
