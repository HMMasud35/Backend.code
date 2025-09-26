"use client"
import React, { useState } from 'react'

const Signup = () => {
  const [tasks, setTasks] = useState([]);
  const [Id, setId] = useState("")
  const [Title, setTitle] = useState("")
  const [Category, setCategory] = useState("")
  const [Price, setPrice] = useState("")

  const addTask = () => {
    if (Id.trim() && Title.trim() && Category.trim() && Price.trim()) {
      axios.post("http://localhost:3000/addtodo", {
        Id,
        Title,
        Category,
        Price,
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
      setTasks([...tasks, { Id, Title, Category, Price }]);
    } else {
      alert("fill require")
    }
    setId("")
    setTitle("")
    setCategory("")
    setPrice("")
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">📝 To-Do List</h1>

      <div className="grid grid-rows-4 gap-3">
        <input
          type="text"
          value={Id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
          className="flex-1 border rounded-lg px-3 py-2 "
        />
        <input
          type="text"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="flex-1 border rounded-lg px-3 py-2 "
        />
        <input
          type="text"
          value={Category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="flex-1 border rounded-lg px-3 py-2 "
        />
        <input
          type="number"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="flex-1 border rounded-lg px-3 py-2 "
        />

        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default Signup