import React from 'react'
interface userProps {
    params: {
      id: string;
    };
  }
const page = ({params}: userProps) => {
    const {id} = params

  return (
    <div>
<h1>userProfile: {id}</h1>

    </div>
  )
}

export default page