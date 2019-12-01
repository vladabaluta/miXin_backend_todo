import { Controller, Post, Body, Get, Param, Req, Delete, Patch } from '@nestjs/common';
import { CreateToDoDto } from './dtos/create-toDo.dto';
import { TodoService} from './todo.service'


@Controller('todo')
export class TodoController {
    constructor(private readonly toDoService: TodoService){}

    @Post()
    create(@Body() createToDoDto: CreateToDoDto){
        return this.toDoService.createToDoItem(createToDoDto);

    }

    @Get()
    async getAllToDos() {
        const todo = await this.toDoService.getToDos();
        return todo;
    }

    @Get (':id')
    getTodo(@Param('id') ToDoId: string) {
        return this.toDoService.getSingleToDo(ToDoId);
    }
     
    @Delete(':id')
    async removeToDo (@Param('id') ToDoId: string){
        await this.toDoService.deleteToDo(ToDoId);
        return null;
    }

    @Patch('id')
    async updateToDo(@Param('id') ToDoId: string){
        await this.toDoService.updateToDo(ToDoId);
        return null;
    }

    
}
