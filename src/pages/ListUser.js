import React, { useEffect, useState } from 'react'
import { listUsers } from '../utils';

function ListUser() {
    const [usernames, setUsernames] = useState()
    
    const loadUsernames = async () => {
        let users = await listUsers()
        setUsernames(users)
        console.log(users)
    }

    useEffect (() =>{
        loadUsernames()
    },[])

  return (
    <div className='usernames'>
        {usernames?.map((user, index) => (
            <div key={index} className="userListItem">
                <p>{`User ${user.user_id}: ${user.username}` }</p>
                <p>{`Email: ${user.email}`}</p>
                <p>{`Phone: ${user.phone}`}</p>
                <br/>
            </div>
        ))}
    </div>
  )
}

export default ListUser