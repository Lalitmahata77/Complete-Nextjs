import Link from 'next/link'
import React from 'react'

const Users = () => {
    const users = [
        { id: "1", title: "user1" },
        { id: "2", title: "user2" },
    ];
    return (
        <div>
            <h1 className='text-2xl font-bold text-center mt-20'> Users</h1>

            <div>
                {
                    users.map((user) => (
                        <div key={user.id} className='flex justify-center items-center mt-5'>
                            <Link href={`/users/${user.id}`}>{user?.title}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Users