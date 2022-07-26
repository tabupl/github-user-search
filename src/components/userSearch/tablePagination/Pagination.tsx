import { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'

type TablePaginationProps = {
  currentPage: number | null
  itemsPerPage: number
  maxItems: number
  onGoToPage: (pageNumber: number) => void
}

const TablePagination = ({
  currentPage,
  maxItems,
  itemsPerPage,
  onGoToPage,
}: TablePaginationProps): JSX.Element => {
  const maxPages = Math.ceil(maxItems / itemsPerPage)

  const onPrevClick = () => {
    if (currentPage && currentPage !== 1) {
      onGoToPage(currentPage - 1)
    }
  }

  const onNextClick = () => {
    if (currentPage && currentPage !== maxPages) {
      onGoToPage(currentPage + 1)
    }
  }

  return (
    <Pagination size='lg' className='mt-0'>
      <Pagination.Prev onClick={onPrevClick} disabled={!!currentPage && currentPage < 2} />
      <Pagination.Item disabled>
        {currentPage}/{maxPages}
      </Pagination.Item>
      <Pagination.Next onClick={onNextClick} disabled={!!currentPage && currentPage === maxPages} />
    </Pagination>
  )
}

export default TablePagination
