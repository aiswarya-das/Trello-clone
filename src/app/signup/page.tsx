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
      console.log("signup failed",error.response?.data?.error || error.message);
      toast.error(error.response?.data?.error || error.message)
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-blue-200">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-xl">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Welcome to <span className="text-indigo-600">Workflo!</span>
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Full name"
              />
            </div>
          </div>
          <div>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Your email"
              />
            </div>
          </div>
          <div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              onClick={onSignup}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                buttonDisabled ? 'bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              disabled={buttonDisabled}
            >
              {loading ? "Processing..." : "Sign up"}
            </button>
          </div>
        </div>
        <p className="mt-2 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Log in.
            </Link>
          </p>
      </div>
    </div>
  );
}