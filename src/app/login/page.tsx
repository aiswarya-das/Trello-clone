"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
export default function LoginPage(){
  const [user,setUser] = React.useState({
    email: "",
    password: "",
  })
  const onLogin = async () => {
    
  }
  return (
    <div><center>
      <h1><center>Login</center></h1>
      <hr/>
      <label className="block font-bold mb-2" htmlFor="email">Email</label>
      <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" id="email" type="text" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="Your email"></input>
      <br />
      <br />
      <label htmlFor="password" className="block font-bold mb-2">password</label>
      <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" id="password" type="text" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password"></input>
      <button onClick={onLogin}
      className="p-2 block border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 ">Login here</button>
      <Link href="/signup">Visit signup page</Link>
      </center>
    </div>
  )
}