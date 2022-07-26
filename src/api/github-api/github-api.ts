import { apiGet } from '../general'
import { cacheRequest } from '../helpers'
import { GithubUserSearchResponse, GithubUser } from './types'

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN
const githubUrl = 'https://api.github.com'
const config = {
  headers: {
    authorization: `token ${TOKEN}`,
  },
}

export const searchUsers = cacheRequest<GithubUserSearchResponse>(
  (searchValue: string, page = 1, itemsPerPage = 10): Promise<GithubUserSearchResponse> =>
    apiGet(
      `${githubUrl}/search/users?q=${searchValue} type:user&page=${page}&per_page=${itemsPerPage}`,
      config,
    ),
)
export const getUser = cacheRequest<GithubUser>(
  (userName: string): Promise<GithubUser> => apiGet(`${githubUrl}/users/${userName}`, config),
)
