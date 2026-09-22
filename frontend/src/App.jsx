import './App.css'
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  // const [count, setCount] = useState(0)
  const [user,setUser] = useState(0)


  useEffect(() => {
    axios.get("http://localhost:3000/api/user/user")
    .then((response)=>{
      setUser(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })


  return (
    <>
    <h1>all user</h1>
    {user.length}
    {user.gmail}
    
    </>
  )
}

export default App
