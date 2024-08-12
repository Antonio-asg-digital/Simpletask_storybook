import { Meta, StoryObj } from '@storybook/angular';
import TaskComponent from './task.component';
import { Task } from '../models/task.model';

const meta: Meta<TaskComponent> = {
  component: TaskComponent,
  title: 'Task',
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      ...args,
      onPinTask: () => {},
      onArchiveTask: () => {},
    },
    template: `<app-task [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task>`,
  }),
};
export default meta;
type Story = StoryObj<TaskComponent>;

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Task 1',
      state: 'TASK_INBOX',
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      id: '2',
      title: 'Archived Task',
      state: 'TASK_ARCHIVED',
    },
  },
};
