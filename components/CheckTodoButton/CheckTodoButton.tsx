'use client';
import { useRouter } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';

type CheckTodoButtonType = {
  id: string;
  isDone: boolean;
};

const updateTodo = async (isChecked: any, id: string, router: any) => {
  const formData = new FormData();
  formData.append('isDone', isChecked);
  formData.append('id', id);
  await fetch('http://localhost:3000/todos/api', {
    body: formData,
    method: 'PATCH',
  });

  router.refresh();
};

export default function CheckTodoButton({ id, isDone }: CheckTodoButtonType) {
  const router = useRouter();
  return (
    <div className="text-center">
      <p className=" text-xs">Is done?</p>
      <Checkbox
        checked={isDone}
        onCheckedChange={(checked) => {
          updateTodo(checked, id, router);
        }}
      />
    </div>
  );
}
