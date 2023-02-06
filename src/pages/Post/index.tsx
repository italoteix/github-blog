import { ReactComponent as LinkIcon } from '@/assets/icons/arrow-up-right-from-square-solid.svg'
import { ReactComponent as CalendarIcon } from '@/assets/icons/calendar-day-solid.svg'
import { ReactComponent as BackIcon } from '@/assets/icons/chevron-left-solid.svg'
import { ReactComponent as CommentIcon } from '@/assets/icons/comment-solid.svg'
import { ReactComponent as GithubIcon } from '@/assets/icons/github-brands.svg'

import { Block, CardFooter, CardNav, HeaderCard } from './styles'

export function Post() {
  return (
    <div>
      <HeaderCard>
        <CardNav>
          <a href="">
            <BackIcon />
            voltar
          </a>
          <a href="">
            ver no github
            <LinkIcon />
          </a>
        </CardNav>

        <main>
          <h1>JavaScript data types and data structures</h1>
        </main>

        <CardFooter>
          <ul>
            <li>
              <GithubIcon />
              <span>cameronwll</span>
            </li>
            <li>
              <CalendarIcon />
              <span>Há 1 dia</span>
            </li>
            <li>
              <CommentIcon />
              <span>5 comentários</span>
            </li>
          </ul>
        </CardFooter>
      </HeaderCard>

      <Block>
        <div>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </div>
      </Block>
    </div>
  )
}
