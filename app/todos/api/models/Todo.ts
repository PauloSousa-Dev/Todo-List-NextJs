import mongoose from 'mongoose';
import { Types } from 'mongoose';

type Todo = {
    _id: Types.ObjectId;
    title:String;
    description: String
};

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
});

export default  mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
export type {Todo}