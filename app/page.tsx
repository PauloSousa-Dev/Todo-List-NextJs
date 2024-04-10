import type { Todo } from '@/app/todos/api/models/Todo';
import AddTodoButton from '@/components/AddTodoButton';
import TodoCard from '@/components/TodoCard';

export default async function Home() {
  let posts;
  let fail;
  try {
    posts = await (
      await fetch(`http://localhost:3000/todos/api`, {
        cache: 'no-store',
      })
    ).json();
  } catch (error) {
    // TypeError: Failed to fetch
    console.log('There was an error', error);
    fail = true;
  }

  if (fail) {
    return (
      <p className="mb-5 text-3xl font-bold text-white">
        We have a problem, please contact the team
      </p>
    );
  }
  if (!posts.posts.length) {
    return (
      <div className="grid">
        <p className="mb-5 text-3xl font-bold text-white">
          No Todos please add new one
        </p>
        <AddTodoButton />
      </div>
    );
  }

  return (
    <div className="grid w-full max-w-xl grid-cols-1 gap-2">
      <AddTodoButton />
      {posts.posts.map(({ _id, title, description }: Todo) => (
        <TodoCard
          key={_id.toString()}
          title={title}
          description={description}
          id={_id.toString()}
        />
      ))}
    </div>
  );
}
