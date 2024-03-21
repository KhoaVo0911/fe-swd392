import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import "../../styles/components/blogSingle.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PackageList from "../../components/Package/PackageList";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { Blogs, TemplateRequest} from "../../api/database";
import { FORM_RULES, PAGE_ROUTES } from "../../utils/constant";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const BlogDetailPage = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    window.scrollTo(10, 0);
    initData(Blogs);
  }, []);

  // Xử lý lấy dữ liệu dummy data by id
  const initData = (data) => {
    const blog = data.find((b) => b.blogId === id);
    blog.date = new Date(blog.date).toLocaleDateString("en-GB", {
        // Format date to 'dd MMM, YYYY'
        day: "numeric",
        month: "short",
        year: "numeric",
    });
    blog.templateRequest = TemplateRequest;
    setBlog(blog);
    setLoading(false);
  };

  // Xử lý tạo Quotation Request, check nếu localStorage không có access token thì redirect về trang login
  const handleQuotationRequest = () => {
    if (!localStorage.getItem("accessToken")) {
      navigate(PAGE_ROUTES.LOGIN);
    } else {
      openNotification()
    }
  }

  if (loading) return <div>Loading...</div>;

  // Hiển thị thông báo
  const openNotification = () => {
    api.open({
      message: 'Thông báo',
      description:
        'Bạn đã tạo báo giá thành công. Vui lòng kiểm tra ở mục Quotation.',
      icon: (
        <SmileOutlined
          style={{
            color: '#108ee9',
          }}
        />
      ),
    });
  };

  return (
    <Fragment>
      {contextHolder}
      <Navbar />
      <PageTitle pageTitle={blog.title} pagesub="blog" />
      <section className="wpo-blog-single-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-10 offset-lg-1">
              <div className="wpo-blog-content">
                <div className="post format-standard-image">

                <div className="grid grid-cols-2 grid-flow-row gap-4">
                    <div className="col-start">
                         {/* Tiêu đề danh sách package */}
                        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Các gói combo</h2>
                    </div>
                    
                    <div className="col-end text-right">
                        <button onClick={() => handleQuotationRequest()} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Tạo báo giá</button>
                    </div>
                </div>

                    {/* Package List component */}
                    <PackageList props={blog?.templateRequest}/>
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="fi flaticon-calendar"></i>{" "}
                        <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                          {blog.date}
                        </kbd>
                      </li>
                      <li>
                        <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                          {blog.subTitle}
                        </kbd>
                      </li>
                    </ul>
                  </div>
                  <h2>{blog.title}</h2>
                  <div className="grid gap-4 mb-6">
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src={blog.image[0]}
                        alt={blog.title}
                      />
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                      {blog.image.map((img) => (
                        <div>
                          <img
                            className="h-auto max-w-full rounded-lg"
                            src={img}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
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
                      Sed ut perspiciatis unde omnis iste natus error
                      sit voluptatem accusantium doloremque
                      laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo inventore veritatis.
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
                      <span className="post-control-link">
                        Previous Post
                      </span>
                      <span className="post-name">
                        At vero eos et accusamus et iusto odio
                        dignissimos ducimus qui blanditiis
                        praesentium.
                      </span>
                    </a>
                  </div>
                  <div className="next-post">
                    <a href="/">
                      <span className="post-control-link">
                        Next Post
                      </span>
                      <span className="post-name">
                        Dignissimos ducimus qui blanditiis praesentiu
                        deleniti atque corrupti quos dolores
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
                                  I will give you a complete account
                                  of the system, and expound the
                                  actual teachings of the great
                                  explorer of the truth,{" "}
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
                                      I will give you a complete
                                      account of the system, and
                                      expound the actual teachings of
                                      the great explorer of the truth,{" "}
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
                                          I will give you a complete
                                          account of the system, and
                                          expound the actual teachings
                                          of the great explorer of the
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
                                  I will give you a complete account
                                  of the system, and expound the
                                  actual teachings of the great
                                  explorer of the truth,{" "}
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
                    </ol>
                  </div>
                  <div className="comment-respond">
                    <h3 className="comment-reply-title">
                      Post Comments
                    </h3>
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
                        <input
                          id="submit"
                          value="Post Comment"
                          type="submit"
                        />
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