import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';
import { createTaskDto } from './dto/create-Task.dto';

@Injectable()
export class TasksService {

    private tasks = []

    getTasks() {
        return this.tasks
    }
    
    getTask(id: number) {
        const result = this.tasks.find(task => task.id === id)

        if(!result) {
            return new NotFoundException(`Task with id ${id} not found`)
        }

        return result;
    }

    createTasks(task : createTaskDto) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task
    }
    updateTasks() {
        return 'actualizando tarea'
    }
    deleteTasks() {
        return 'eliminando tarea'
    }
    patchTasks() {
        return 'corrigiendo tarea'
    }
}
