import { Meta, Story } from '@storybook/react/types-6-0'

import Home, { HomeProps } from '.'

export default {
  title: 'Home',
  component: Home,
  args: {
    name: 'Next Boilerlate'
  }
} as Meta

export const Default: Story<HomeProps> = args => <Home {...args} />
