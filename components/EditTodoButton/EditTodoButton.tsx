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
import { Pencil } from 'lucide-react';

const search = async (formData: any, router: any) => {
  console.log('formData', formData);
  const rest = await fetch('http://localhost:3000/todos/api', {
    body: formData,
    method: 'PATCH',
  });

  router.refresh();
};

type EditTodoButtonType = { title: string; description: string; id: string };

export default function EditTodoButton({
  title,
  description,
  id,
}: EditTodoButtonType) {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-full justify-start text-left">
          <Pencil className="mr-2 h-4 w-4" /> Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
        </DialogHeader>
        <form
          action={(formData) => {
            formData.append('id', id);
            search(formData, router);
          }}
        >
          <div className="grid gap-4 py-4">
            <Input
              name="title"
              type="text"
              placeholder="Title of todo?"
              defaultValue={`${title}`}
            />
            <Input
              name="description"
              type="text"
              placeholder="Description of todo?"
              defaultValue={`${description}`}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Submit</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
