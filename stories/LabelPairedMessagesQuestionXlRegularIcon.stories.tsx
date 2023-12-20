import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMessagesQuestionXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMessagesQuestionXlRegularIcon',
  component: LabelPairedMessagesQuestionXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedMessagesQuestionXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMessagesQuestionXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
