import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFileChartColumnRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFileChartColumnRegularIcon',
  component: StandaloneFileChartColumnRegularIcon,
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
} satisfies Meta<typeof StandaloneFileChartColumnRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFileChartColumnRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
