import { GithubUser } from '../../../api/github-api/types'
import { TableUser } from './types'

export const getTableUserFromGithubUser = (resUser: GithubUser): TableUser => {
  return {
    id: resUser.id,
    login: resUser.login,
    avatar: resUser.avatar_url,
    followers: resUser.followers,
    publicRepos: resUser.public_repos,
    url: resUser.html_url,
    company: resUser.company,
    bio: resUser.bio || '',
  }
}
