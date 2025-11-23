export interface Task {
  task_id: string;
  task_title: string;
  task_description: string;
  created_at: Date;
  valid_until: Date;
}
