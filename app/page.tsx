import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import type {Todo} from "@/app/todos/api/models/Todo";


export default async function Home() {

  const posts = await (await fetch(`http://localhost:3000/todos/api`, { cache: 'no-store' })).json();

  if(!posts.lenght) {
    return (
    <>
    <p className="text-3xl text-white font-bold">No Todos please add new one</p>
    <Button>
      <span>Add Todo</span>
    </Button>
    </>
    );
  };

  return (
    <>
      {posts.map(({_id}:Todo) => (
      <Card key={_id.toString()}>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
      </Card>))}
      </>
  );
}
