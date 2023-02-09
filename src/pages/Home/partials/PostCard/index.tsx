import { Link } from 'react-router-dom'
import { CardHeader, Container } from './styles'

interface PostCardProps {
  post: {
    id: number
    title: string
    created_at: string
    body: string
  }
}
export function PostCard({ post }: PostCardProps) {
  return (
    <Container>
      <Link to={`/post/${post.id}`}>
        <CardHeader>
          <h3>{post.title}</h3>
          <span>Há 1 dia</span>
        </CardHeader>
        <main>{post.body}</main>
      </Link>
    </Container>
  )
}
