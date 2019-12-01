import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateToDoDto } from './dtos/create-toDo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToDo } from './interfaces/toDo.interface';

@Injectable()
export class TodoService {

    constructor(@InjectModel('ToDo') private toDoModel: Model<ToDo>) {}
    
    async createToDoItem(createToDoItemDto: CreateToDoDto): Promise<string> {
        const newToDo = this.toDoModel(createToDoItemDto);
        const result = await newToDo.save();
        return result.id;
    }   
    
    async getToDos() {
        const result = await this.toDoModel.find();
        return result as ToDo[];
    }

    async getSingleToDo(ToDoId: string) {
        const result = this.findToDo(ToDoId);
        return result;
    }
    private async findToDo(id: string): Promise<ToDo> {
        const todo = await this.toDoModel.findById(id);
        return todo;
    }

    async deleteToDo (ToDoId: string) {
        await this.toDoModel.deleteOne({_id: ToDoId}).exec();
    }

    async updateToDo (ToDoId: string){
        const updateToDo = await this.findToDo(ToDoId);
    }
}
 