import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCourses = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [technology, setTechnology] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const courseData = {
      title,
      type,
      description,
      duration,
      technology,
      price,
      instructor: {
        name,
        contactEmail,
        contactPhone,
      }
    };

    try {
      const res = await fetch("http://localhost:8000/CourseList", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseData),
      });
      navigate("/CoursesPage");

    } catch (error) {
      console.error("Error adding course:", error);
      
      alert("There was an error adding the course: " + error.message);
    }
  };

  return (
    <>
      <section className="bg-indigo-100">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 shadow-md rounded-md border mt-4 md:m-0">

            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Add Course
              </h2>

              {/* TYPE */}
              <div className="mb-4">
                <label className="block font-bold">Course Type</label>
                <select
                  className="border rounded w-full py-2 px-3"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="full-stack">Full Stack</option>
                  <option value="front-end">Front End</option>
                  <option value="back-end">Back End</option>
                  <option value="database">Database</option>
                </select>
              </div>

              {/* TITLE */}
              <div className="mb-4">
                <label className="block font-bold">Course Title</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* DESCRIPTION */}
              <div className="mb-4">
                <label className="block font-bold">Description</label>
                <textarea
                  className="border rounded w-full py-2 px-3"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* DURATION */}
              <div className="mb-4">
                <label className="block font-bold">Duration</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>

              {/* TECHNOLOGIES */}
              <div className="mb-4">
                <label className="block font-bold">Technologies</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                />
              </div>

              {/* PRICE */}
              <div className="mb-4">
                <label className="block font-bold">Price</label>
                <input
                  type="number"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <h3 className="text-2xl mb-4">Instructor Info</h3>

              {/* NAME */}
              <div className="mb-4">
                <label className="block font-bold">Instructor Name</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* EMAIL */}
              <div className="mb-4">
                <label className="block font-bold">Contact Email</label>
                <input
                  type="email"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>

              {/* PHONE */}
              <div className="mb-4">
                <label className="block font-bold">Contact Phone</label>
                <input
                  type="tel"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded-full w-full"
              >
                Add Course
              </button>
            </form>

          </div>
        </div>
      </section>
    </>
  );
}

export default AddCourses;