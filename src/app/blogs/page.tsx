import BlogCard from "@/components/ui/BlogCard";
import React from "react";
import { Blog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexa Bloge",
};

const Blogepage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blog = await res.json();

  return (
    <div className="w-[90%] mx-auto my-10 ">
      <h1 className="text-3xl text-center my-5 font-bold">
        Latest Blogs From <span className="text-teal-600">NexaBlog</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className=" grid grid-cols-3 gap-4">
        {blog.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogepage;
