import { useState, useEffect, useCallback } from 'react'
import SearchBar from './searchBar/SearchBar'
import { debounce } from '../../api/helpers'
import { getUser, searchUsers } from '../../api/github-api/github-api'
import UsersTable from './usersTable/UsersTable'
import { getTableUserFromGithubUser } from './usersTable/utils'
import { TableUser } from './usersTable/types'
import TablePagination from './tablePagination/Pagination'
import { Spinner } from 'react-bootstrap'

const ITEMS_PER_PAGE = 10

const UserSearch = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [maxUsers, setMaxUsers] = useState<number>(0)
  const [users, setUsers] = useState<TableUser[]>([])
  const [currentPage, setCurrentPage] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showError, setShowError] = useState<boolean>(false)

  const debounceSearchUsers = debounce((value: string, page: number) => {
    setShowError(false)
    return searchUsers(value, page, ITEMS_PER_PAGE)
      .then((res) => {
        setMaxUsers(res.total_count)
        return res.items
      })
      .then((users) =>
        Promise.all(users.map((user) => getUser(user.login))).then((res) => {
          setUsers(res.map(getTableUserFromGithubUser))
          setIsLoading(false)
        }),
      )
      .catch(() => {
        setShowError(true)
      })
  })

  const onSearchUsers = useCallback(
    (value: string, page: number) => debounceSearchUsers(value, page),
    [],
  )

  useEffect(() => {
    setCurrentPage(1)
    onSearchUsers(searchValue, 1)
  }, [searchValue])

  const onPageChange = (pageNumber: number) => {
    setIsLoading(true)
    setCurrentPage(pageNumber)
    onSearchUsers(searchValue, pageNumber)
  }

  const onTyping = (val: string) => {
    setIsLoading(true)
    setSearchValue(val)
  }

  return (
    <div className='w-75 mx-auto'>
      {showError && (
        <h5 className='p-2 bg-danger text-white'>
          Something went wrong, please try to search again
        </h5>
      )}
      <div className='d-flex justify-content-between'>
        <SearchBar onValueChange={onTyping} value={searchValue} />
        {(!!searchValue.length || !!users.length) && (
          <div>
            <p className='mb-1'>Users found: {maxUsers}</p>
            <TablePagination
              currentPage={currentPage}
              itemsPerPage={ITEMS_PER_PAGE}
              maxItems={maxUsers}
              onGoToPage={onPageChange}
            />
          </div>
        )}
      </div>
      {isLoading ? (
        <Spinner className='d-block mx-auto mt-5' animation='border' role='status' />
      ) : users.length > 0 ? (
        <>
          <UsersTable users={users} />
          <div className='d-flex flex-row-reverse'>
            <div className='d-inline-block'></div>
          </div>
        </>
      ) : (
        <h3 className='bg-primary mt-3 text-center p-2'>No users found</h3>
      )}
    </div>
  )
}

export default UserSearch
