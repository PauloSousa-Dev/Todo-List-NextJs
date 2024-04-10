'use client';
import { Trash2, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const deleteItem = async (id: String, router: any) => {
  const rest = await fetch('http://localhost:3000/todos/api', {
    body: JSON.stringify({ id: id }),
    method: 'delete',
  });

  router.refresh();
};

type EditButtonsType = { id: String };
export default function EditButtons({ id }: EditButtonsType) {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between gap-2">
      <Button
        onClick={() => deleteItem(id, router)}
        className="h-full justify-start text-left"
      >
        <Trash2 className="mr-2 h-4 w-4" /> Delete
      </Button>
      <Button className="h-full justify-start text-left">
        <Pencil className="mr-2 h-4 w-4" /> Edit
      </Button>
    </div>
  );
}
