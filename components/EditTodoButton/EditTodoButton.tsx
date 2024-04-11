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
import { Checkbox } from '../ui/checkbox';

const search = async (formData: any, router: any) => {
  await formData.set('isDone', formData.get('isDone') === null ? false : true);
  const rest = await fetch('http://localhost:3000/todos/api', {
    body: formData,
    method: 'PATCH',
  });

  router.refresh();
};

type EditTodoButtonType = {
  title: string;
  description: string;
  id: string;
  isDone: boolean;
};

export default function EditTodoButton({
  title,
  description,
  id,
  isDone,
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
          <DialogTitle>Edit Todo</DialogTitle>
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
            <div className="flex items-center space-x-2">
              <Checkbox id="isDone" name="isDone" defaultChecked={isDone} />
              <label
                htmlFor="isDone"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Is done?
              </label>
            </div>
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
