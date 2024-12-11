import React from 'react';

const LatestBlog = () => {
  // Example blog data with the new article
  const blogs = [
    {
      title: "What Happens When You Type https://www.google.com?",
      description: "Explore the behind-the-scenes process when you type a URL in your browser.",
      date: "2024-12-10",
      link: "/blog/what-happens-when-you-type-url"
    },
    {
      title: "Understanding JavaScript Closures",
      description: "This article dives deep into JavaScript closures and their applications.",
      date: "2024-12-05",
      link: "/blog/understanding-javascript-closures"
    },
    // More blog posts can go here...
  ];

  return (
    <section className="latest-blogs py-10 bg-gray-200"> {/* Changed background color to ash (gray-200) */}
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-gray-500 text-5xl font-serif font-bold mb-2">LATEST BLOG POSTS</h2>
        <p className="text-blue-500 text-3xl font-bold">My Articles</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-post border p-4 rounded-lg shadow-lg bg-white">
            <h3 className="text-xl font-bold text-blue-600">{blog.title}</h3>
            <p className="text-gray-600 my-2">{blog.description}</p>
            <span className="text-sm text-gray-500">{blog.date}</span>
            <div className="mt-4">
              <a href={blog.link} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlog;
