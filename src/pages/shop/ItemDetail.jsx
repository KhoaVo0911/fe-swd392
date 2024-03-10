
import { useEffect, useState } from "react";
import "../../styles/components/shop.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CiStar } from "react-icons/ci";
import { useParams } from "react-router-dom";
import importedProducts from "../../api/productDetail"; // Đổi tên để tránh xung đột
import { Spin } from "antd";

const ItemDetail = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    // Tìm sản phẩm dựa vào productId từ URL
    const product = importedProducts.find((p) => p.productId.toString() === productId);
    setProductDetail(product);
  }, [productId]);

  if (!productDetail) return <Spin tip="Loading..." spinning={true} />;

  return (
    <Spin tip="Loading..." spinning={false}>
      <Header />
      <div className="landing-page">
        <div className="content">
          <h3 className="title">Product Details</h3>
          <div className="links">
            <div className="home-link">Home</div>
            <div className="dot"></div>
            <div>Product Details</div>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="product-info">
          <div className="product-data">
            <img
              alt={productDetail.name}
              src={productDetail.image}
              className="product-image"
            />
            <div className="product-detail">
              <h3 className="title">{productDetail.name}</h3>
              <div className="rating">
                <CiStar className="icon" />
                <CiStar className="icon" />
                <CiStar className="icon" />
                <CiStar className="icon" />
                <CiStar className="icon" />
                <span>(25 customer reviews)</span>
              </div>
              <div className="price-data">
                <div className="price">{productDetail.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
              </div>
              <div className="desc-product">{productDetail.description}</div>
              <button
                className="btn-cart"
                onClick={() => console.log('Added to quotation')}
              >
                Add to quotation
              </button>
              <div className="item">
                Categories: <span className="value">{productDetail.categoryName}</span>
              </div>
              <div className="item">
                Tags: <span className="value">Kitchen, Basement, Bathroom</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Spin>
  );
};

export default ItemDetail;

