import axios from 'axios'

import { GITHUB_USER } from '../utils/constants'

export const userApi = axios.create({
  baseURL: `https://api.github.com/users/${GITHUB_USER}`,
})
