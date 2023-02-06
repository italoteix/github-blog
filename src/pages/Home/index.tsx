import { PostCard } from './partials/PostCard'
import { ProfileCard } from './partials/ProfileCard'
import { PostsContainer, PostsHeader, SearchInput } from './styles'

export function Home() {
  return (
    <div>
      <ProfileCard />

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
