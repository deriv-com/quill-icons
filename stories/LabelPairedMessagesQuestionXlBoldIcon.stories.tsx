import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMessagesQuestionXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMessagesQuestionXlBoldIcon',
  component: LabelPairedMessagesQuestionXlBoldIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabelPairedMessagesQuestionXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMessagesQuestionXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
