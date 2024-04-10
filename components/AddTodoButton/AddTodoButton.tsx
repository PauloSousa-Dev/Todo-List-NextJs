'use client';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const search = async (formData: any, router: any) => {
  const rest = await fetch('http://localhost:3000/todos/api', {
    body: formData,
    method: 'post',
  });

  router.refresh();
};

export default function AddTodoButton() {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <span>Add Todo</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
        </DialogHeader>
        <form action={(formData) => search(formData, router)}>
          <div className="grid gap-4 py-4">
            <Input name="title" placeholder="Title of todo?" />
            <Input name="description" placeholder="Description of todo?" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
