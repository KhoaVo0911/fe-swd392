import "../../styles/components/tableHeader.scss"

const TableHeader = () => {
    return (
        <div className="table-header">
          <div className="header-item product">Sản phẩm</div>
          <div className="header-item description">Mô tả</div>
          <div className="size-container">
            <div className="size-top">Kích thước</div>
            {/* <div className="size-bottom">
              <div className="size-item">Dài</div>
              <div className="size-item">Rộng</div>
              <div className="size-item">Cao</div>
            </div> */}
          </div>
          <div className="header-item unit">Đơn vị</div>
          <div className="header-item weight">Khối lượng</div>
          <div className="header-item price">Đơn giá</div>
          <div className="header-item total">Thành tiền</div>
          <div className="header-item note">Ghi chú</div>
          <div className="header-item reference-image">Hình ảnh tham khảo</div>
          <div className="header-item delete"></div>
        </div>
      );
}

export default TableHeader