import blogs from "../../api/blogs";
import "../../styles/components/blog.scss";

const Blog = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="wpo-blog-section section-padding" id="blog">
            <div className="container">
                <div className="row">
                    <div className="wpo-section-title-s2">
                        <span>Our Blog</span>
                        <h2>Our Latest News</h2>
                    </div>
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.slice(0, 3).map((blog, Bitem) => (
                            <div
                                className="col col-lg-4 col-md-6 col-12"
                                key={Bitem}
                            >
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img src={blog.image} alt="" />
                                        <div className="thumb">
                                            {blog.thumb}
                                        </div>
                                    </div>
                                    <div className="wpo-blog-content">
                                        <ul>
                                            <li>{blog.create_at}</li>
                                            <li>
                                                By{" "}
                                                <a onClick={ClickHandler}>
                                                    {blog.author}
                                                </a>
                                            </li>
                                        </ul>
                                        <h2>
                                            <a onClick={ClickHandler}>
                                                {blog.title}
                                            </a>
                                        </h2>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="vector-1">
                <img src="../../../public/images/blog/Vector1.png" alt="" />
            </div>
            <div className="vector-2">
                <img src="../../../public/images/blog/Vector2.png" alt="" />
            </div>
        </section>
    );
};

export default Blog;
