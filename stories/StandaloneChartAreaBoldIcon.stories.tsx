import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChartAreaBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChartAreaBoldIcon',
  component: StandaloneChartAreaBoldIcon,
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
} satisfies Meta<typeof StandaloneChartAreaBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChartAreaBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
