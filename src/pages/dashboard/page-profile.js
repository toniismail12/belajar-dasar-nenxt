import Link from 'next/link'
import React from 'react'
import { GetOrg } from '@/controller'
import { useEffect, useCallback } from 'react'

export default function PageProfile() {

    const fetchData = useCallback(async () => {

        const res = await GetOrg()
        console.log(res)

    }, []);

    useEffect(() => {

        fetchData()

    }, [fetchData])

    return (
        <div className='p-5'>
            <h2>hello di profile</h2>
            <Link className='text-blue-500' href="/home">Page Home</Link>
            <p>Lihat console untuk cek fetch data</p>
        </div>
    )
}
