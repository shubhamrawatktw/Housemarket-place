import React, { useState } from "react";
import Layout from "../components/Layout";
import { AiOutlineEye } from "react-icons/ai";

const Signin = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
   
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
   console.log("form submitted");
   setFormData({
    
    email:"",
    password:""
   })
  };

  const handleChange = (e) => {
  setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
 
  };

  console.log(formData, "formdata");
  return (
    <Layout>
      <section className="border border-black rounded-sm w-96 mx-auto mt-10  py-5 bg-gray-300 shadow-xl">
        <h2 className="text-center text-white text-2xl font-semibold bg-black w-[85%] mx-auto mb-2 py-2">
          Sign In
        </h2>
        <form className=" w-[85%] mx-auto" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="enter your email"
              value={email}
              onChange={handleChange}
              className="border border-black rounded p-1 text-sm w-[100%] mb-2"
            />
          </div>
          <div className="">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type={showPassword ? "text" :"password"  }
              id="password"
              placeholder="enter your password"
              value={password}
              onChange={handleChange}
              className="border border-black rounded p-1 text-sm w-[100%] mb-2"
            />
          </div>
          <h6 className="text-sm">
            <span>show password </span>
            <span>
              <AiOutlineEye onClick={()=>setShowPassword(!showPassword)} className="inline mb-1 cursor-pointer text-red-600 text-base" />
            </span>
          </h6>
          <button type="submit" className="bg-blue-400 border px-10 mt-2 mb-2">
            Sign In
          </button>
          <h3>Sign in with google</h3>
        </form>
      </section>
    </Layout>
  );
}

export default Signin
