import { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import { Check } from 'phosphor-react'

export interface CheckboxProps
  // eslint-disable-next-line prettier/prettier
  extends ComponentProps<typeof CheckboxContainer> { }

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
