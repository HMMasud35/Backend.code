"use client"
import axios from 'axios';
import React, { useState } from 'react'

const Otp = () => {
  const [otp, setOtp] = useState("")

  const addTask = (e) => {
     e.preventDefault()
   
    if (otp.trim()) {
      axios.post("http://localhost:4000/api/v1/auth/verify-otp", {
        otp
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
      setOtp("")


      alert("OTP Send Successfull")
    } else {
      alert("OTP required")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">OTP</h1>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="00-00-00"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <button
            type="submit"
            onClick={addTask}
            className="w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700 transition disabled:opacity-60"
          >
            Submite
          </button>
        </form>
      </div>
    </div>
  )
}

export default Otp