import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Finish project report',
    description: 'Title of the task',
  })
  task_title: string;

  @ApiProperty({
    example: 'Complete the final report for the project by Friday',
    description: 'Description of the task',
  })
  task_description: string;

  @ApiProperty({ example: 'Low', description: 'Priority of the task' })
  task_priority: string;

  @ApiProperty({ example: 'Pending', description: 'Status of the task' })
  task_status: string;

  @ApiProperty({ example: '2024-06-01', description: 'Start date of the task' })
  task_from: string;

  @ApiProperty({ example: '2024-06-07', description: 'End date of the task' })
  task_to: string;
}
