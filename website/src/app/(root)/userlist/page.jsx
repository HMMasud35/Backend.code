import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Userlist = () => {
  const [alluser, setAlluser] = useState([]);

  function getallusers() {
    axios.get("http://localhost:4000/api/v1/auth/getuserlist")
      .then((res) => {
        setAlluser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getallusers()
  }, [alluser])


  return (
    <>
      <div className="mx-auto p-5 shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 User information</h1>
        <ul>
          <li className='grid gap-15 grid-cols-5 bg-gray-800 text-white text-center text-xl font-bold py-3 justify-center mb-5'>
            <h2 className='col-span-2'>Name</h2>
            <h3 className='col-span-2'>Email Address</h3>
            <h3 className='col-span-1'>phone</h3>
          </li>
        </ul>
        <ul>
          {alluser.map((users) => (
            <li className='grid gap-2 grid-cols-5 mb-3 justify-center'>
              <h2 className='col-span-2 border-2 px-5 py-3 rounded-md bg-sky-600/20'>{users.name}</h2>
              <h3 className='col-span-2 border-2 px-5 py-3 rounded-md bg-sky-600/20'>{users.email}</h3>
              <h3 className='col-span-1 border-2 px-5 py-3 rounded-md bg-sky-600/20 text-center'>{users.phone}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Userlist