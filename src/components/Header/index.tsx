import logo from '../../assets/logo.svg'

import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo src={logo} alt="Github blog" />
    </Container>
  )
}
