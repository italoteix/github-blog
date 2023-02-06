import { ReactComponent as BuildingIcon } from '@/assets/icons/building-solid.svg'
import { ReactComponent as LinkIcon } from '@/assets/icons/arrow-up-right-from-square-solid.svg'
import { ReactComponent as GithubIcon } from '@/assets/icons/github-brands.svg'
import { ReactComponent as UserGroupIcon } from '@/assets/icons/user-group-solid.svg'

import { Container, InfoContainer, InfoFooter, InfoHeader } from './styles'

export interface User {
  avatar_url: string
  login: string
  name: string
  html_url: string
  followers: number
  company: string
  bio: string
}

interface ProfileCardProps {
  user: User
}

export function ProfileCard({ user }: ProfileCardProps) {
  return (
    <Container>
      <img src={user.avatar_url} alt="" />

      <InfoContainer>
        <InfoHeader>
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            github
            <LinkIcon />
          </a>
        </InfoHeader>

        <main>
          <p>{user.bio}</p>
        </main>

        <InfoFooter>
          <ul>
            <li>
              <GithubIcon />
              <span>{user.login}</span>
            </li>
            <li>
              <BuildingIcon />
              <span>{user.company}</span>
            </li>
            <li>
              <UserGroupIcon />
              <span>{user.followers} seguidores</span>
            </li>
          </ul>
        </InfoFooter>
      </InfoContainer>
    </Container>
  )
}
