import React from 'react';
import './OurBlog.css';
import { Link } from 'react-router-dom';
import Image from '../../../assets/image.svg';
import CalendarIcon from '../../../assets/calendar.svg';
import TimerIcon from '../../../assets/timer.svg';
import BlogImage from '../../../assets/blog image.svg';
import BlogImage2 from '../../../assets/blog image2.svg';
import SaveIcon from '../../../assets/save.svg';

const OurBlogs = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h3 className="blog-title">Our Blogs</h3>
        <Link to="/blog" className="view-all">View all &gt;</Link>
      </div>

      <div className="main-container">
        <div className="blog-content">
          <img src={Image} alt="Meta" className="img-fluide" />
          <div className="meta-box">
            <div className="meta-info">
              <div className="calendar">
                <img src={CalendarIcon} width="20" height="20" />
                <h6 className="meta-text">August , 8 , 2023</h6>
              </div>
              <div className="calendar">
                <img src={TimerIcon} width="20" height="20" />
                <h6 className="meta-text">3 min read</h6>
              </div>
            </div>
            <h6 className="meta-title">Meta Platforms plans to release free</h6>
            <p className="meta-desc">
              The parent company of Facebook, Meta Platforms, is introducing software to help developers
            </p>
          </div>
        </div>

        <div className="side-blogs">
          <div className="side-blog">
            <div className='image-blogss'>
              <img src={BlogImage} alt="Blog" className="img-fluides" />
              <div className="blog-box">
                <h3 className="blog-heading">8 Things You Probably Didn’t Know About Headphones</h3>
                <p className="blog-desc">
                  Owning a headphone could mean a different thing for different people.it acts as a fashion statement...
                </p>
                <div className="blog-footer">
                  <div className="calendar">
                    <img src={CalendarIcon} width="20" height="20" />
                    <h6 className="meta-text gray">August , 8 , 2023</h6>
                  </div>
                  <img src={SaveIcon} alt="Save" className="save-icon" />
                </div>
              </div></div>
          </div>

          <div className="side-blog">
            <div className='image-blogss'>
              <img src={BlogImage2} alt="Blog2" className="img-fluides" />
              <div className="blog-box">
                <h3 className="blog-heading">Analyzing the August 17th Bitcoin Price Drop</h3>
                <p className="blog-desc">
                  Owning a headphone could mean a different thing for different people.it acts as a fashion statement...
                </p>
                <div className="blog-footer">
                  <div className="calendar">
                    <img src={CalendarIcon} width="20" height="20" />
                    <h6 className="meta-text gray">August , 8 , 2023</h6>
                  </div>
                  <img src={SaveIcon} alt="Save" className="save-icon" />
                </div>
              </div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
