"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'


const Signup = () => {
  const [userlist, setUserlist] = useState([]);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")


  const addTask = () => {
    if (name.trim() && email.trim() && password.trim() && phone.trim()) {
      axios.post("http://localhost:4000/api/v1/auth/signup", {
        name,
        email,
        password,
        phone,
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })

      setUserlist([...userlist, { name, email, password, phone }]);
      setName("")
      setEmail("")
      setPassword("")
      setPhone("")

      alert("Registration Successfull")
    } else {
      alert("Name, Email and Password required")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Strong Password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Your Phone / Mobile Number"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <button
            type="submit"
            onClick={addTask}
            className="w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700 transition disabled:opacity-60"
          >
            Sign Up
          </button>
          <div className='flex gap-3'>
            <h3>Already have an account?</h3>
            <Link className='text-sky-500 underline' href={"/login"}>Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup