// import { useEffect, useState } from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import "../../styles/components/shop.scss";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import products from "../../api/product";
// // import ProductAPI from "../../api/products";
// import { Spin, message } from "antd";
// import { useMutation } from "@tanstack/react-query";
// import QuotationAPI from "../../api/quotation";
// import { useNavigate } from "react-router-dom";

// const ShopItem = () => {
//   const navigate = useNavigate();
//   const [messageApi, contextHolder] = message.useMessage();
//   const [products, setProducts] = useState(null); // Khởi tạo state products với giá trị null
//   const [currentPage, setCurrentPage] = useState(1);
//   const selectedProducts = products;

//   const indexLastPost = currentPage * 10;
//   const indexFirstPost = indexLastPost - 10;

//   // const { isPending: productListLoading, mutate } = useMutation({
//   //   mutationFn: () => products.getProductList(currentPage),
//   //   onSuccess: (response) => {
//   //     // Cập nhật state products nếu nhận dữ liệu thành công
//   //     setProducts({
//   //       responses: response.data, // Giả sử response trả về dữ liệu ở trong `data`
//   //       totalCount: response.totalCount, // Và tổng số lượng sản phẩm
//   //     });
//   //   },
//   //   onError: () => {
//   //     messageApi.open({
//   //       type: "error",
//   //       content: "Error occur when get products list",
//   //     });
//   //   },
//   // });

//   // const { isPending, mutate: mutateAddIntoQuotation } = useMutation({
//   //   mutationFn: QuotationAPI.AddNewQuotation,
//   //   onSuccess: () => {
//   //     messageApi.open({
//   //       type: "success",
//   //       content: "Add product into quotation is successfull",
//   //     });
//   //   },
//   //   onError: () => {
//   //     messageApi.open({
//   //       type: "error",
//   //       content: "Error occur when add into quotationn",
//   //     });
//   //   },
//   // });

//   // useEffect(() => {
//   //   if (products === null) {
//   //     // Kiểm tra nếu products là null mới thực hiện gọi API
//   //     mutate();
//   //   }
//   // }, [currentPage, mutate]);

//   // const onAddProductIntoQuotation = (productId) => {
//   //   mutateAddIntoQuotation({
//   //     productId,
//   //     quantity: 1,
//   //   });
//   // };

//   return (
//     <Spin tip="Loading..." spinning={false}>
//       {contextHolder}
//       <Navbar></Navbar>
//       <div className="landing-page">
//         <div className="content">
//           <h3 className="title">Product</h3>
//           <div className="links">
//             <div className="home-link">Home</div>

//             <div className="dot"></div>
//             <div>Product</div>
//           </div>
//         </div>
//       </div>

//       <div className="products">
//         <div className="product-list">
//           {selectedProducts.map((product, index) => {
//               return (
//                 <div
//                   className="product-detail"
//                   key={product.productId || index}
//                   onClick={() => navigate(`/shop/item/${product.productId}`)}
//                 >
//                   <img
//                     alt={product.name || "product"}
//                     src={
//                       product.image
//                         ? product.image
//                         : "data:image/png;base64,iVBORw0KGgoAAAANSUh  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"
//                     }
//                     style={{ objectFit: "cover" }}
//                     className="image"
//                   />
//                   <div className="content">
//                     <a className="title" href="/shop/item/details">
//                       {product.name}
//                     </a>
//                     <p className="price">${product.price}</p>
//                     {/* <div
//                       className="button-cart"
//                       onClick={() =>
//                         onAddProductIntoQuotation(products.productId)
//                       }
//                     >
//                       Add to quotation
//                     </div> */}
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>

//       <div className="pagination">
//         <div className="content">
//           <div
//             className="item"
//             onClick={() => {
//               if (currentPage > 1) {
//                 setCurrentPage(currentPage - 1);
//               }
//             }}
//           >
//             <IoIosArrowBack />
//           </div>

//           {products.totalCount > 0 &&
//             Array.from(Array(Math.ceil(products.totalCount / 10)).keys()).map(
//               (page) => {
//                 return (
//                   <div
//                     className={`item ${page + 1 === currentPage && "active"}`}
//                     onClick={() => setCurrentPage(page + 1)}
//                   >
//                     {page + 1}
//                   </div>
//                 );
//               }
//             )}

//           <div
//             className="item"
//             onClick={() => {
//               if (currentPage < 5) {
//                 setCurrentPage(currentPage + 1);
//               }
//             }}
//           >
//             <IoIosArrowForward />
//           </div>
//         </div>
//       </div>
//       <Footer></Footer>
//     </Spin>
//   );
// };

// export default ShopItem;

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "../../styles/components/shop.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import importedProducts from "../../api/product"; // Đổi tên biến imported để tránh xung đột
import { Spin, message } from "antd";
import { useNavigate } from "react-router-dom";

const ShopItem = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [currentProducts, setCurrentProducts] = useState([]); // Sử dụng tên mới cho biến state
  const [currentPage, setCurrentPage] = useState(1);

  // Phân trang cho sản phẩm
  const itemsPerPage = 10; // Số sản phẩm trên mỗi trang
  const indexLastProduct = currentPage * itemsPerPage;
  const indexFirstProduct = indexLastProduct - itemsPerPage;

  // Cập nhật sản phẩm dựa trên trang hiện tại
  useEffect(() => {
    setCurrentProducts(importedProducts.slice(indexFirstProduct, indexLastProduct));
  }, [currentPage]);

  // Không sử dụng useMutation ở đây vì chúng ta không thực hiện gọi API

  return (
    <Spin tip="Loading..." spinning={false}> {/* Loại bỏ spinning={productListLoading} vì biến này không được sử dụng */}
      {contextHolder}
      <Navbar />
      <div className="landing-page">
        <div className="content">
          <h3 className="title">Product</h3>
          <div className="links">
            <div className="home-link">Home</div>
            <div className="dot"></div>
            <div>Product</div>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="product-list">
          {currentProducts.map((product, index) => (
            <div
              className="product-detail"
              key={product.productId || index}
              onClick={() => navigate(`/shop/item/${product.productId}`)}
            >
              <img
                alt={product.name || "product"}
                src={product.image || "path/to/default/image"} // Cập nhật đường dẫn ảnh mặc định
                className="image"
              />
              <div className="content">
                <a className="title" href={`/shop/item/${product.productId}`}>{product.name}</a>
                <p className="price">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="content">
          <IoIosArrowBack className="item" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} />
          {Array.from(Array(Math.ceil(importedProducts.length / itemsPerPage)), (_, index) => (
            <div
              key={index}
              className={`item ${index + 1 === currentPage ? "active" : ""}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </div>
          ))}
          <IoIosArrowForward className="item" onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(importedProducts.length / itemsPerPage)))} />
        </div>
      </div>
      <Footer />
    </Spin>
  );
};

export default ShopItem;
