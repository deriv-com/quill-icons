import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMessagesQuestionCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMessagesQuestionCaptionBoldIcon',
  component: LabelPairedMessagesQuestionCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedMessagesQuestionCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMessagesQuestionCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
