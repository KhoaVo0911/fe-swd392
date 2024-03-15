import { Fragment } from "react";
import { useParams } from "react-router-dom";
import "../../styles/components/blogSingle.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import blogs from "../../api/blogs";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const BlogDetailPage = () => {
  const { slug } = useParams(); // Lấy slug từ URL
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) {
    return <div>Blog not found</div>;
  } // Tìm blog dựa trên slug
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={blog.title} pagesub="blog" />
      <section className="wpo-blog-single-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-10 offset-lg-1">
              <div className="wpo-blog-content">
                <div className="post format-standard-image">
                  <div className="entry-media">
                    <img src={blog.blogSingleImg} alt={blog.title} />
                  </div>

                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="fi ti-user"></i> By{" "}
                        <a href="/">{blog.author}</a>{" "}
                      </li>
                      <li>
                        <i className="fi ti-comment-alt"></i> Comments:{" "}
                        {blog.comment}
                      </li>
                      <li>
                        <i className="fi flaticon-calendar"></i> Create at:{" "}
                        {blog.create_at}
                      </li>
                    </ul>
                  </div>
                  <h2>{blog.title}</h2>
                  <p>{blog.description}</p>
                  <blockquote>
                    Combined with a handful of model sentence structures,
                    generate Lorem Ipsum which looks reasonable. The generated
                    Lorem Ipsum is therefore always free from repetition,
                    injected humour, or non-characteristic words etc.
                  </blockquote>
                  <p>
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself,
                  </p>

                  <div className="gallery">
                    <div>
                      <img src={blog.blogSingleImg} alt="" />
                    </div>
                    <div>
                      <img src={blog.blogSingleImg} alt="" />
                    </div>
                  </div>
                </div>

                <div className="tag-share clearfix">
                  <div className="tag">
                    <span>Share: </span>
                    <ul>
                      <li>
                        <a href="/">Planning</a>
                      </li>
                      <li>
                        <a href="/">Architecture</a>
                      </li>
                      <li>
                        <a href="/">creative</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tag-share-s2 clearfix">
                  <div className="tag">
                    <span>Share: </span>
                    <ul>
                      <li>
                        <a href="/">facebook</a>
                      </li>
                      <li>
                        <a href="/">twitter</a>
                      </li>
                      <li>
                        <a href="/">linkedin</a>
                      </li>
                      <li>
                        <a href="/">pinterest</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="author-box">
                  <div className="author-avatar">
                    <a href="/" target="_blank">
                      <img
                        src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
                        alt="Avatar"
                      />
                    </a>
                  </div>
                  <div className="author-content">
                    <a href="/" className="author-name">
                      Author: Jenny Watson
                    </a>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis.
                    </p>
                    <div className="socials">
                      <ul className="social-link">
                        <li>
                          <a href="/">
                            <FacebookIcon />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <TwitterIcon />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <LinkedInIcon />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <InstagramIcon />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="more-posts">
                  <div className="previous-post">
                    <a href="/">
                      <span className="post-control-link">Previous Post</span>
                      <span className="post-name">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium.
                      </span>
                    </a>
                  </div>
                  <div className="next-post">
                    <a href="/">
                      <span className="post-control-link">Next Post</span>
                      <span className="post-name">
                        Dignissimos ducimus qui blanditiis praesentiu deleniti
                        atque corrupti quos dolores
                      </span>
                    </a>
                  </div>
                </div>

                <div className="comments-area">
                  <div className="comments-section">
                    <h3 className="comments-title">Comments</h3>
                    <ol className="comments">
                      <li
                        className="comment even thread-even depth-1"
                        id="comment-1"
                      >
                        <div id="div-comment-1">
                          <div className="comment-theme">
                            <div className="comment-image">
                              <img src="Avatar" alt="" />
                            </div>
                          </div>
                          <div className="comment-main-area">
                            <div className="comment-wrapper">
                              <div className="comments-meta">
                                <h4>
                                  John Abraham{" "}
                                  <span className="comments-date">
                                    January 12,2022 At 9.00am
                                  </span>
                                </h4>
                              </div>
                              <div className="comment-area">
                                <p>
                                  I will give you a complete account of the
                                  system, and expound the actual teachings of
                                  the great explorer of the truth,{" "}
                                </p>
                                <div className="comments-reply">
                                  <a href="/" className="comment-reply-link">
                                    <span>Reply</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="children">
                          <li className="comment">
                            <div>
                              <div className="comment-theme">
                                <div className="comment-image">
                                  <img src="" alt="" />
                                </div>
                              </div>
                              <div className="comment-main-area">
                                <div className="comment-wrapper">
                                  <div className="comments-meta">
                                    <h4>
                                      Lily Watson{" "}
                                      <span className="comments-date">
                                        January 12,2022 At 9.00am
                                      </span>
                                    </h4>
                                  </div>
                                  <div className="comment-area">
                                    <p>
                                      I will give you a complete account of the
                                      system, and expound the actual teachings
                                      of the great explorer of the truth,{" "}
                                    </p>
                                    <div className="comments-reply">
                                      <a
                                        href="/"
                                        className="comment-reply-link"
                                      >
                                        <span>Reply</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul>
                              <li className="comment">
                                <div>
                                  <div className="comment-theme">
                                    <div className="comment-image">
                                      <img src="" alt="" />
                                    </div>
                                  </div>
                                  <div className="comment-main-area">
                                    <div className="comment-wrapper">
                                      <div className="comments-meta">
                                        <h4>
                                          John Abraham{" "}
                                          <span className="comments-date">
                                            January 12,2022 At 9.00am
                                          </span>
                                        </h4>
                                      </div>
                                      <div className="comment-area">
                                        <p>
                                          I will give you a complete account of
                                          the system, and expound the actual
                                          teachings of the great explorer of the
                                          truth,{" "}
                                        </p>
                                        <div className="comments-reply">
                                          <a
                                            href="/"
                                            className="comment-reply-link"
                                          >
                                            <span>Reply</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="comment">
                        <div>
                          <div className="comment-theme">
                            <div className="comment-image">
                              <img src="" alt="" />
                            </div>
                          </div>
                          <div className="comment-main-area">
                            <div className="comment-wrapper">
                              <div className="comments-meta">
                                <h4>
                                  John Abraham{" "}
                                  <span className="comments-date">
                                    January 12,2022 At 9.00am
                                  </span>
                                </h4>
                              </div>
                              <div className="comment-area">
                                <p>
                                  I will give you a complete account of the
                                  system, and expound the actual teachings of
                                  the great explorer of the truth,{" "}
                                </p>
                                <div className="comments-reply">
                                  <a href="/" className="comment-reply-link">
                                    <span>Reply</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Post Comments</h3>
                    <form id="commentform" className="comment-form">
                      <div className="form-textarea">
                        <textarea
                          id="comment"
                          placeholder="Write Your Comments..."
                        ></textarea>
                      </div>
                      <div className="form-inputs">
                        <input placeholder="Website" type="url" />
                        <input placeholder="Name" type="text" />
                        <input placeholder="Email" type="email" />
                      </div>
                      <div className="form-submit">
                        <input id="submit" value="Post Comment" type="submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogDetailPage;
