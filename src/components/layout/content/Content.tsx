import React from 'react'

const Content = ({ children }: React.PropsWithChildren): JSX.Element => (
  <div className='app-content bg-light flex-grow-1 py-2 px-5'>{children}</div>
)

export default Content
