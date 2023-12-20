import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRightFromBracketXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRightFromBracketXlBoldIcon',
  component: LabelPairedRightFromBracketXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedRightFromBracketXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRightFromBracketXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
