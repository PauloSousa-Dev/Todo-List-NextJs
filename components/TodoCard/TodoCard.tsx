import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Trash2, Pencil } from 'lucide-react';
import { Button } from '../ui/button';
import EditButtons from './EditButtons/EditButtons';

type todoCardType = {
  title: String;
  description: String;
  id: String;
};
export default function TodoCard({ title, description, id }: todoCardType) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-2">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
      <EditButtons id={id} />
    </div>
  );
}
