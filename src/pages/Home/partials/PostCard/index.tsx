import { Link } from 'react-router-dom'

import { getRelativeTime } from '@/utils/formatter'

import { CardHeader, Container } from './styles'

interface PostCardProps {
  post: {
    id: number
    number: number
    title: string
    created_at: string
    body: string
  }
}
export function PostCard({ post }: PostCardProps) {
  return (
    <Container>
      <Link to={`/post/${post.number}`}>
        <CardHeader>
          <h3>{post.title}</h3>
          <span>{getRelativeTime(new Date(post.created_at))}</span>
        </CardHeader>
        <main>{post.body}</main>
      </Link>
    </Container>
  )
}
