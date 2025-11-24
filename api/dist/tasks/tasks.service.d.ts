import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: number): string;
    update(id: number, updateTaskDto: UpdateTaskDto): string;
    remove(id: number): string;
}
