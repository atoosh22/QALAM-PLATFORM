import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    //  <!-- ✅ Navbar -->
  <nav className="bg-[#432DD7] border-b border-white fixed top-0 left-0 w-full z-500">
    <div class="flex justify-between items-center px-5 py-3">
      {/* <!-- Logo --> */}
      <img className="w-10" src="/logo.png" alt="logo" />

      {/* <!-- Links --> */}
      <ul id="menu" class="hidden md:flex text-white space-x-6">
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/CoursesPage">Courses</Link> </li>
        <li> <Link to="/AddCourses">Add Courses</Link> </li>
        
      </ul>

      {/* <!-- Menu Toggle (Mobile) --> */}
      <ion-icon id="menu-toggle" class="text-white text-3xl md:hidden cursor-pointer" name="menu-outline"></ion-icon>
    </div>

  </nav>
  )
}

export default NavBar
