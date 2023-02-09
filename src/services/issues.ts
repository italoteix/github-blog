import axios from 'axios'

import { DATABASE_REPO, GITHUB_USER } from '../utils/constants'

const issuesApi = axios.create({
  baseURL: `https://api.github.com/repos/${GITHUB_USER}/${DATABASE_REPO}/issues`,
})

export async function getIssue(issueNumber: number) {
  return await issuesApi.get(`${issueNumber}`)
}
