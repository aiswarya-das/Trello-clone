"use client";
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function DashboardPage(){
  const router = useRouter()
  const [data,setData] = useState("nothing")
  const logout = async () =>{
try {
  await axios.get('/api/users/logout')
  toast.success('Logout successful')
  router.push('/login')
} catch (error:any) {
  console.log(error.message)
  toast.error(error.response?.data?.error || "An error occurred");
}

  }
  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    console.log(res.data);
    setData(res.data.data._id)
}
  return(
<div><center>
      <h1><center>Welcome to dashboard!</center></h1>
      {/* <h2>{data === 'nothing' ? "Nothing" : <Link href={`/dashboard/${data}`}>{data}
            </Link>}</h2> */}
      <hr/>
      <button onClick={logout}>Logout</button>
      {/* <button
        onClick={getUserDetails}
        >GetUser Details</button> */}
      </center>
  </div>
  )
}