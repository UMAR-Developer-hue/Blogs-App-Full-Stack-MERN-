import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './schema/AuthContext'; // Import AuthProvider
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Blogs from "./components/Blogs";
import CreateBlog from './components/CreateBlog';
import Dashboardpage from './components/Dashboard-Page/Dashboardpage';
import Logout from './components/Logout';
import Login from './components/Login';
import Form from './components/Form';
import AddCategory from "./components/AddCategory"
import Update from "./components/Update"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Blogs />} />
      <Route path='/create-blog' element={<CreateBlog />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path='/dashboard' element={<Dashboardpage />} />
      <Route path='/category' element={<AddCategory />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Form />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);

reportWebVitals();
