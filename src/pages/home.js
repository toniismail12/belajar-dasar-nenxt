import Link from 'next/link'
import React from 'react'

export default function HomeNew() {
  return (
    <div className='p-5'>
      <h1>Hello in page home</h1>
      <Link className='text-blue-500' href="/dashboard/page-profile">Page Profile</Link>
    </div>
  )
}
