import React, { useState } from "react";

const Login = () => {

    const [isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = () => {
      setIsLogin(!isLogin);
    };

const getInputData=(e)=>{
    e.preventDefault();
    console.log(fullName,email,password);
    setFullName("");
    setEmail("");
    setPassword("");
}

  return (
    <div>
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh] bg-cover"
          src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
          alt="banner"
        />
      </div>
      <form className="flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90">
        <div className="flex flex-col">
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Fullname"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
         <button className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium">{isLogin?"Login":"Signup"}</button>
          <p className="text-white mt-2">
            {isLogin ? "New to Netflix?" : "Already have an account?"}
            <span
              onClick={loginHandler}
              className="ml-1 text-blue-900 font-medium cursor-pointer"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login
