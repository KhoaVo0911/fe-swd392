import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Blogs } from "../../api/database";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initData(Blogs);
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // Xử lý lấy dữ liệu dummy data
    const initData = (data) => {
        data.forEach((blog) => {
            blog.date = new Date(blog.date).toLocaleDateString("en-GB", { // Format date to 'dd MMM, YYYY'
                day: "numeric",
                month: "short",
                year: "numeric",
            });
        });
        setBlogs(data);
        setLoading(false);
    };

    if (loading) return <div>Loading...</div>;

    return (
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div
                        className={`col col-lg-8 col-12 col-lg-10 offset-lg-1`}
                    >
                        <div className="wpo-blog-content">
                            {blogs.map((blog, bitem) => (
                                <div
                                    className={`post  ${blog.blClass}`}
                                    key={bitem}
                                >
                                    <div className="entry-media video-holder">
                                        <img src={blog.image[0]} alt="" />
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className="fi flaticon-calendar"></i>{" "}
                                                {blog.date}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="entry-details">
                                        <h3>
                                            <Link
                                                to={`/blog/${blog.blogId}`}
                                                onClick={ClickHandler}
                                            >
                                                {blog.title}
                                            </Link>
                                        </h3>
                                        <p>
                                            {blog.description}
                                        </p>
                                        <Link
                                            to={`/blog/${blog.id}`}
                                            onClick={ClickHandler}
                                            className="read-more"
                                        >
                                            READ MORE...
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <BlogSidebar blLeft={props.blLeft} /> */}
                </div>
            </div>
        </section>
    );
};

export default BlogList;