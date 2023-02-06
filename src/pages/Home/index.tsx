import { Form, useLoaderData } from 'react-router-dom'

import { searchIssue } from '@/services/search'
import { userApi } from '@/services/user'

import { PostCard } from './partials/PostCard'
import { ProfileCard, User } from './partials/ProfileCard'
import { PostsContainer, PostsHeader, SearchInput } from './styles'

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url)
  const q = url.searchParams.get('q')

  const [{ data: user }, { data: postsData }] = await Promise.all([
    userApi.get<User>(''),
    searchIssue(q || ''),
  ])

  return { user, postsTotal: postsData.total_count, posts: postsData.items }
}

export function Home() {
  const { user, posts, postsTotal } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >

  return (
    <div>
      <ProfileCard user={user} />

      <section>
        <PostsHeader>
          <div>
            <h2>Publicações</h2>
            <span>
              {postsTotal}
              {` publicaç${postsTotal === 1 ? 'ão' : 'ões'}`}
            </span>
          </div>
          <Form id="search-form" role="search">
            <SearchInput
              type="search"
              name="q"
              id="search-input"
              placeholder="Buscar conteúdo"
              aria-label="Buscar conteúdo"
            />
          </Form>
        </PostsHeader>

        {postsTotal > 0 ? (
          <PostsContainer>
            {posts.map((post) => (
              <PostCard key={post.id} />
            ))}
          </PostsContainer>
        ) : (
          'No post found :('
        )}
      </section>
    </div>
  )
}
