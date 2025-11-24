import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ length: 100, nullable: false })
  task_title: string;

  @Column({ type: 'text', nullable: false })
  task_description: string;

  @Column({ length: 20, nullable: false })
  task_priority: string;

  @Column({ length: 20, nullable: false })
  task_status: string;

  @Column({ type: 'date', nullable: false })
  task_from: Date;

  @Column({ type: 'date', nullable: false })
  task_to: Date;
}
