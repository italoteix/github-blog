import axios from 'axios'

import { DATABASE_REPO, GITHUB_USER } from '../utils/constants'

const searchApi = axios.create({
  baseURL: 'https://api.github.com/search',
})

interface Issues {
  id: number
  title: string
  created_at: string
  body: string
}

interface IssuesResult {
  total_count: number
  items: Issues[]
}

export async function searchIssue(searchValue: string) {
  const parsedSearchValue = encodeURIComponent(searchValue)

  return await searchApi.get<IssuesResult>(
    `issues?q=${parsedSearchValue}%20repo:${GITHUB_USER}/${DATABASE_REPO}`,
  )
}
