"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";
import toast from "react-hot-toast";
export default function LoginPage(){
  const router = useRouter();
  const [user,setUser] = React.useState({
    email: "",
    password: "",
  })
  const [buttonDisabled,setButtonDisable]=React.useState(false);
  const [loading,setLoading] = React.useState(false);
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login",user)
      console.log("login successful",response.data)
      toast.success("Login success")
      router.push("/dashboard")
    } catch (error:any) {
      console.log("Login failed",error.message);
      toast.error(error.message)
    }finally{
      setLoading(false);
    }
  }
  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0){
      setButtonDisable(false);
    }else{
      setButtonDisable(true);
    }
  },[user]);
  return (
    <div><center>
      <h1><center>{loading ? "Processing":"Login"}Login</center></h1>
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