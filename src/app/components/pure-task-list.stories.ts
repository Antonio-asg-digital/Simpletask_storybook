import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import PureTaskListComponent from './pure-task-list.component';
import TaskComponent from './task.component';
import { action } from '@storybook/addon-actions'; // Import the action utility

const meta: Meta<PureTaskListComponent> = {
  title: 'PureTaskList', // Title of the story in the Storybook sidebar
  component: PureTaskListComponent, // The component being documented
  tags: ['autodocs'], // Tags to categorize the story
  decorators: [
    moduleMetadata({
      // Metadata for the Angular module
      declarations: [PureTaskListComponent, TaskComponent], // Declare the components used in the story
      imports: [CommonModule], // Import necessary Angular modules
    }),
    componentWrapperDecorator(
      // Wraps each story with a custom decorator to add styling
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
  argTypes: {
    // Defines the types and actions for component arguments
    onPinTask: { action: 'pinTask' }, // Action to handle pinning tasks
    onArchiveTask: { action: 'archiveTask' }, // Action to handle archiving tasks
    tasks: { control: 'object' }, // Control for the 'tasks' argument to allow editing in the Storybook UI
  },
};

export default meta;

type Story = StoryObj<PureTaskListComponent>;

// Define the Template
const Template: Story = {
  render: (args) => ({
    // The render function returns the component with its arguments
    props: {
      ...args,
      // Ensure that the action handlers are correctly mapped
      onPinTask: action('pinTask'),
      onArchiveTask: action('archiveTask'),
    },
    template: `<app-pure-task-list [tasks]="tasks" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-pure-task-list>`,
  }),
};

// Default story showcasing the component with some default tasks
export const Default: Story = {
  args: {
    tasks: [
      { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
      { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
      { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
      { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
      { id: '5', title: 'Task 5', state: 'TASK_INBOX' },
      { id: '6', title: 'Task 6', state: 'TASK_INBOX' },
    ],
  },
};

// Story showcasing the component with some tasks pinned
export const WithPinnedTasks: Story = {
  args: {
    tasks: [
      ...(Default.args?.tasks || []), // Spread the default tasks into the array
      { id: '4', title: 'Task 4 (pinned)', state: 'TASK_PINNED' }, // Add a pinned task
    ],
  },
};

// Story showcasing the component in a loading state
export const Loading: Story = {
  args: {
    tasks: [], // Empty task array
    loading: true, // Set loading state to true
  },
};

// Story showcasing the component in an empty state (not loading)
export const Empty: Story = {
  args: {
    tasks: [], // Empty task array
    loading: false, // Set loading state to false
  },
};
