import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { RegisterAPI } from "../APIRequest/apiRequest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get("email");
    let userName = formData.get("username");
    let password = formData.get("password");
    let data = await RegisterAPI({
      email: email,
      userName: userName,
      password: password,
    });
    if (data.status == "success") {
      toast.success("Registration Successful...!");
      setTimeout(() => {
        navigate("/login");
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
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="username"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="user@company.com"
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
                className="text-white bg-slate-800 hover:bg-slate-900 py-1.5 px-4 rounded font-bold w-full"
              >
                Register
              </button>

              <p className="text-sm font-light text-gray-500  text-center">
                Already have an account ?{" "}
                <Link
                  to="/login"
                  className="font-medium text-slate-900 hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Register;
