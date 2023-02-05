import { ReactComponent as BuildingIcon } from '@/assets/icons/building-solid.svg'
import { ReactComponent as LinkIcon } from '@/assets/icons/arrow-up-right-from-square-solid.svg'
import { ReactComponent as GithubIcon } from '@/assets/icons/github-brands.svg'
import { ReactComponent as UserGroupIcon } from '@/assets/icons/user-group-solid.svg'

import { Container, InfoContainer, InfoFooter, InfoHeader } from './styles'

export function ProfileCard() {
  return (
    <Container>
      <img src="https://avatars.githubusercontent.com/u/45885054?v=4" alt="" />

      <InfoContainer>
        <InfoHeader>
          <h1>Cameron Williamson</h1>
          <a href="">
            github
            <LinkIcon />
          </a>
        </InfoHeader>

        <main>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </main>

        <InfoFooter>
          <ul>
            <li>
              <GithubIcon />
              <span>cameronwll</span>
            </li>
            <li>
              <BuildingIcon />
              <span>Rocketseat</span>
            </li>
            <li>
              <UserGroupIcon />
              <span>32 seguidores</span>
            </li>
          </ul>
        </InfoFooter>
      </InfoContainer>
    </Container>
  )
}
