import { revalidatePath } from 'next/cache';
import React, { Suspense } from 'react'

type User = {
    id: number;
    name: string;
}

const UserPage = async () => {



    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        { cache: 'no-store' }
    );
    const users: User[] = await res.json();
    console.log(users);

    return (
        <div>
            <h1>Users</h1>


            <ul>
                {users.map(user => {
                    return (
                        <li key={user.id}>
                            {user.id} .
                            {user.name}
                        </li>
                    )
                })}
            </ul>



        </div>
    )
}

export default UserPage