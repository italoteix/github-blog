import { useLoaderData } from 'react-router-dom'

import { userApi } from '../../services/user'
import { PostCard } from './partials/PostCard'
import { ProfileCard, User } from './partials/ProfileCard'
import { PostsContainer, PostsHeader, SearchInput } from './styles'

export async function loader() {
  const { data } = await userApi.get<User>('')
  return { user: data }
}

export function Home() {
  const { user } = useLoaderData() as Awaited<ReturnType<typeof loader>>

  return (
    <div>
      <ProfileCard user={user} />

      <section>
        <PostsHeader>
          <div>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </div>
          <form>
            <SearchInput
              type="search"
              name=""
              id=""
              placeholder="Buscar conteúdo"
            />
          </form>
        </PostsHeader>

        <PostsContainer>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostsContainer>
      </section>
    </div>
  )
}
