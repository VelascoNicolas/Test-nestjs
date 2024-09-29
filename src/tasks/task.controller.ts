import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe} from '@nestjs/common'
import { TasksService } from './tasks.service';
import { createTaskDto } from './dto/create-Task.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@Controller('/tasks')
@ApiTags('Task')
export class TaskController{
    tasksService:TasksService

    constructor(tasksService:TasksService) {
        this.tasksService = tasksService
    }

    @Get()
    @ApiOperation({summary: 'Get All Tasks'})
    getAllTask(@Query() query : any) {
        console.log(query)
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id')id: string) {
        console.log(id)
        return this.tasksService.getTask(parseInt(id));
    }
    @Post()
    @UsePipes(new ValidationPipe())
    createTask(@Body() task: createTaskDto) {
        return this.tasksService.createTasks(task);
    }
    @Put()
    updateTask() {
        return this.tasksService.updateTasks();
    }
    @Delete()
    deleteTask() {
        return this.tasksService.deleteTasks();
    }
    @Patch()
    patchTask() {
        return this.tasksService.patchTasks();
    }
}