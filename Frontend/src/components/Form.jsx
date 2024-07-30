import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios"; // Import Axios
import { signUpSchema } from "../schema/index";

function RegistrationForm() {
  const [message, setMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      console.log(values);

      try {
        let res = await axios.post("http://localhost:5000/api/user/register", values, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log(res.data);

        if (res.status === 201) {
          alert("Registration successful");
          setMessage("Registration Successful");

          // history.push("/login");
        } else {
          alert("Invalid registration");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred during registration");
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-32"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.username && formik.touched.username ? (
          <p className="text-red-600 text-sm">{formik.errors.username}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <p className="text-red-600 text-sm">{formik.errors.email}</p>
        ) : null}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password ? (
          <p className="text-red-600 text-sm">{formik.errors.password}</p>
        ) : null}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Register
      </button>
      {<p className="mt-4 ml-28 text-green-500">{message}</p>}
    </form>
  );
}

export default RegistrationForm;
