import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Services from '../Services/Services';
import Topbar from '../Shared/Topbar';
import Footer from '../Shared/Footer';

const Blog = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

 

  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Regular Dental Checkups',
      date: 'November 1, 2023',
      content: 'Regular dental checkups are crucial for maintaining good oral health...',
      image: 'https://source.unsplash.com/800x600/?dental,checkup',
    },
    {
      id: 2,
      title: 'Tips for Keeping Your Teeth Clean and Healthy',
      date: 'October 15, 2023',
      content: 'Proper dental hygiene is essential for preventing cavities and gum disease...',
      image: 'https://source.unsplash.com/800x600/?dental,cleaning',
    },
    {
      id: 3,
      title: 'Understanding Different Types of Dental Treatments',
      date: 'September 28, 2023',
      content: 'Learn about common dental treatments such as root canal therapy, crowns, and more...',
      image: 'https://source.unsplash.com/800x600/?dental,treatments',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="">
        <Topbar/>

  <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="p-6 bg-white rounded-lg shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-2">{post.date}</p>
              <p className="text-gray-600">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
       <Footer/>
    </div>
  );
};

export default Blog;
