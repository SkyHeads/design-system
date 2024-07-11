import { User } from 'phosphor-react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'
import { ComponentProps } from 'react'

// eslint-disable-next-line prettier/prettier
export interface AvatarProps extends ComponentProps<typeof AvatarImage> { }

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
