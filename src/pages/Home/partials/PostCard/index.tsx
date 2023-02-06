import { CardHeader, Container } from './styles'

export function PostCard() {
  return (
    <Container>
      <CardHeader>
        <h3>JavaScript data types and data structures</h3>
        <span>Há 1 dia</span>
      </CardHeader>
      <main>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </main>
    </Container>
  )
}
