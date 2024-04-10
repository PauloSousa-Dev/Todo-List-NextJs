import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
      <EditButtons title={title} description={description} id={id} />
    </div>
  );
}
