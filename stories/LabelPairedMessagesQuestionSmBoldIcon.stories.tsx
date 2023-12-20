import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMessagesQuestionSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMessagesQuestionSmBoldIcon',
  component: LabelPairedMessagesQuestionSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedMessagesQuestionSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMessagesQuestionSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
