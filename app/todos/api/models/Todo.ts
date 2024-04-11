import mongoose from 'mongoose';
import { Types } from 'mongoose';

type Todo = {
  _id: Types.ObjectId;
  title: string;
  description: string;
  createAt: string;
  isDone: boolean;
};

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  isDone: Boolean,
  createAt: { type: Date, default: Date.now },
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
export type { Todo };
