import React from 'react'
interface userProps {
    params: {
      id: string;
    };
  }
const page = ({params}: userProps) => {
    const person = [
        {id: "1", name: "user1", age: 20},
        {id: "2", name: "user2", age: 30}

    ]

    const user = person.find((user)=> user.id === params.id)
  return (
    <div>
       <h1>{user?.name}</h1>
       <h1>{user?.id}</h1>
       <h1>{user?.age}</h1>

    </div>
  )
}

export default page