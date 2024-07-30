"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import { toast } from "react-hot-toast";
export default function SignupPage(){
  const router = useRouter();
  const [user,setUser] = React.useState({
    email: "",
    username: "",
    password: "",
  })
  const [buttonDisabled,setButtonDisable] = React.useState(false);
  const [loading,setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup",user);
      console.log("Signup success",response.data);
      router.push("/login");

    } catch (error:any) {
      console.log("signup failed",error.message);
      toast.error(error.message)
    }finally{
      setLoading(false);
    }
  }
  useEffect(()=>{
  if(user.email.length > 0 && user.password.length >0 && user.username.length > 0 ){
  setButtonDisable(false);
  } else{
    setButtonDisable(true);
  }
  },[user]);
  return (
    <div><center>
      <h1><center>{loading ? "Processing" : "Signup"}</center></h1>
      <hr/>
      <label htmlFor="username" className="block font-bold mb-2">username</label>
      <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" id="username" type="text" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} placeholder="Full name"></input>
      <br />
      <br />
      <label className="block font-bold mb-2" htmlFor="email">Email</label>
      <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" id="email" type="text" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="Your email"></input>
      <br />
      <br />
      <label htmlFor="password" className="block font-bold mb-2">password</label>
      <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" id="password" type="text" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password"></input>
      <button onClick={onSignup}
      className="p-2 block border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 ">{buttonDisabled ? "No signup":"Signup"}</button>
      <Link href="/login">Visit Login</Link>
      </center>
    </div>
  )
}