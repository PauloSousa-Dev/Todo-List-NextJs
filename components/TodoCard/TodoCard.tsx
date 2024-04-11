import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import EditButtons from './EditButtons/EditButtons';
import CheckTodoButton from '../CheckTodoButton';

type todoCardType = {
  title: string;
  description: string;
  id: string;
  isDone: boolean;
};
export default function TodoCard({
  title,
  description,
  id,
  isDone,
}: todoCardType) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-2">
      <Card>
        <CardHeader className="flex flex-row">
          <div className="flex-grow">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <CheckTodoButton id={id} isDone={isDone} />
        </CardHeader>
      </Card>
      <EditButtons
        title={title}
        description={description}
        id={id}
        isDone={isDone}
      />
    </div>
  );
}
