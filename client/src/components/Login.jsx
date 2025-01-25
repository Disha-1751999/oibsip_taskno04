import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginAPI } from "../APIRequest/apiRequest";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get("email");
    let password = formData.get("password");
    let data = await LoginAPI({
      email: email,
      password: password,
    });
    console.log(data);
    if (data.status == "success") {
      localStorage.setItem("token", data.token);
      toast.success("Login Successful...!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast.error("Error");
    }
  };
  return (
    <section className="py-4 md:py-8">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <span className="flex items-center mb-6 text-2xl font-bold text-gray-900 ">
          UserApp
        </span>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="user@gmail.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  required=""
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="btn text-white bg-slate-800 hover:bg-slate-900 py-1.5 px-4 rounded font-bold w-full"
              >
                Login
              </button>

              <p className="text-sm font-light text-gray-500  text-center">
                Don't have an account ?{" "}
                <Link
                  to="/register"
                  className="font-medium text-gray-900 hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
