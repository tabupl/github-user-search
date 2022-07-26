import { Table } from 'react-bootstrap'
import { TableUser } from './types'

type UsersTableProps = {
  users: TableUser[]
}

const UsersTable = ({ users }: UsersTableProps): JSX.Element => {
  return (
    <Table bordered hover className='mt-3 mb-3'>
      <thead>
        <tr>
          <td>Name</td>
          <td>Company</td>
          <td>Bio</td>
          <td>No. of public repos</td>
          <td>Followers</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={`${user.login}${user.id}`}>
            <td>
              <img src={user.avatar} height='24px' width='24px' />
              <a className='ms-2' href={user.url} target='_blank' rel='noreferrer'>
                {user.login}
              </a>
            </td>
            <td>{user.company}</td>
            <td>{user.bio}</td>
            <td>{user.publicRepos}</td>
            <td>{user.followers}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default UsersTable
