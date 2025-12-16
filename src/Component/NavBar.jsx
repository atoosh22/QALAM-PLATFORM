import React from 'react'

const NavBar = () => {
  return (
    //  <!-- ✅ Navbar -->
  <nav class="bg-[#382C83] border-b border-white fixed top-0 left-0 w-full z-50">
    <div class="flex justify-between items-center px-5 py-3">
      {/* <!-- Logo --> */}
      <img class="w-10" src="/logo.png" alt="logo" />

      {/* <!-- Links --> */}
      <ul id="menu" class="hidden md:flex text-white space-x-6">
        <li><a href="index.html" class="bg-black px-1 hover:text-gray-300">Home</a></li>
        <li><a href="courses.html" class="hover:text-gray-300">Courses</a></li>
        <li><a href="addcourse.html" class="hover:text-gray-300">Add Courses</a></li>
      </ul>

      {/* <!-- Menu Toggle (Mobile) --> */}
      <ion-icon id="menu-toggle" class="text-white text-3xl md:hidden cursor-pointer" name="menu-outline"></ion-icon>
    </div>

    {/* <!-- Mobile Menu --> */}
    <ul id="mobile-menu" class="hidden flex-col bg-indigo-700 text-white space-y-2 p-4 md:hidden">
      <li><a href="index.html" class="block hover:text-gray-300">Home</a></li>
      <li><a href="courses.html" class="block hover:text-gray-300">Courses</a></li>
      <li><a href="addcourse.html" class="block hover:text-gray-300">Add Courses</a></li>
    </ul>
  </nav>
  )
}

export default NavBar
