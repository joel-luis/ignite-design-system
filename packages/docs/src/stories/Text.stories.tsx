import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae, sit sapiente delectus ex inventore. Tempora illum sint deserunt magnam, numquam fugiat doloremque similique recusandae mollitia ullam placeat aliquid dolor.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const customTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
