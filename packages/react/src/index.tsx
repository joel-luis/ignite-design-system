import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
  fontWeight: 'bold',
  color: '$white',
  border: 0,

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      large: {
        fontSize: 16,
        padding: '$3 $4',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
