import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRightFromBracketXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRightFromBracketXlRegularIcon',
  component: LabelPairedRightFromBracketXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedRightFromBracketXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRightFromBracketXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
