import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import type { Todo } from '@/app/todos/api/models/Todo';

export default async function Home() {
  const posts = await (
    await fetch(`http://localhost:3000/todos/api`, { cache: 'no-store' })
  ).json();

  if (!posts.lenght) {
    return (
      <div className="grid">
        <p className="mb-5 text-3xl font-bold text-white">
          No Todos please add new one
        </p>
        <Button>
          <span>Add Todo defd</span>
        </Button>
      </div>
    );
  }

  return (
    <>
      {posts.map(({ _id }: Todo) => (
        <Card key={_id.toString()}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
