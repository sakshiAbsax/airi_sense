import React, { useState } from 'react';
import solutions from '../images/solutions.jpg'; // Import your image
import blogsData from './BlogsData'; // Import your blog data (if available)

const Blogs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <section id="our_pride">
        <div className="bnrImg">
          <img src={solutions} width="100%" height="auto" alt="Solutions" />
        </div>

        <div className="news">
          <div className="row py-4">
            <div className="col-md-12">
              <center>
                <h1>Updated Blogs</h1>
              </center>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              {blogsData.map((blog, index) => (
                <div
                  key={index}
                  className={`column col-lg-4 col-md-6 px-3 my-3`}
                >
                  <div
                    className={`post-module ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="thumbnail">
                      {/* <div className="date">
                        <div className="day">{blog.day}</div>
                        <div className="month">{blog.month}</div>
                      </div> */}
                      <img src={blog.image} alt={blog.title} />
                    </div>
                    <div className="post-content">
                      <div className="category">{blog.photo}</div>
                      <h1 className="title">{blog.title}</h1>
                      <h2 className="sub_title">{blog.subtitle}</h2>
                      <p className="description">{blog.description}</p>
                      <div className="post-meta">
                        <span className="timestamp">
                          <i className="fa fa-clock-">o</i>{blog.time} ago
                        </span>
                        <span className="comments">
                          <i className="fa fa-comments"></i>
                          <a href="#">{blog.commenet}</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
