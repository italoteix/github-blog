import ReactMarkdown from 'react-markdown'
import { Link, useLoaderData, LoaderFunctionArgs } from 'react-router-dom'

import { ReactComponent as LinkIcon } from '@/assets/icons/arrow-up-right-from-square-solid.svg'
import { ReactComponent as CalendarIcon } from '@/assets/icons/calendar-day-solid.svg'
import { ReactComponent as BackIcon } from '@/assets/icons/chevron-left-solid.svg'
import { ReactComponent as CommentIcon } from '@/assets/icons/comment-solid.svg'
import { ReactComponent as GithubIcon } from '@/assets/icons/github-brands.svg'
import { getIssue } from '@/services/issues'
import { getRelativeTime } from '@/utils/formatter'

import { Block, CardFooter, CardNav, HeaderCard } from './styles'

interface PostData {
  body: string
  comments: number
  created_at: string
  html_url: string
  id: number
  title: string
  user: {
    login: string
  }
}

export async function loader({ params }: LoaderFunctionArgs) {
  const { data } = await getIssue(Number(params.id))
  return data
}

export function Post() {
  const post = useLoaderData() as PostData

  return (
    <div>
      <HeaderCard>
        <CardNav>
          <Link to="..">
            <BackIcon />
            voltar
          </Link>
          <a href={post.html_url} target="_blank" rel="noreferrer">
            ver no github
            <LinkIcon />
          </a>
        </CardNav>

        <main>
          <h1>{post.title}</h1>
        </main>

        <CardFooter>
          <ul>
            <li>
              <GithubIcon />
              <span>{post.user.login}</span>
            </li>
            <li>
              <CalendarIcon />
              <span>{getRelativeTime(new Date(post.created_at))}</span>
            </li>
            <li>
              <CommentIcon />
              <span>
                {post.comments} comentário{post.comments !== 1 && 's'}
              </span>
            </li>
          </ul>
        </CardFooter>
      </HeaderCard>

      <Block>
        <div>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </Block>
    </div>
  )
}
