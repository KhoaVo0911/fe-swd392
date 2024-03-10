import "../../styles/components/tableBody.scss"
const TableBody = () => {
    return (
        <div>
            <table className="table-body">
                <tbody>
                        <tr className="table-row">
                            <td className="table-cell product">
                                <div className={`custom-select1`} >
                                    <div className="selected-option noprint-border" >Chọn sản phẩm</div>
                                    <div className="dropdown-arrow toggle-icon">Lên | Xuống</div>
                                        <div className="options">
                                            <div className="option" >
                                                Tên sản phẩm
                                            </div>
                                        </div>
                                </div>
                            </td>
                            <td className="table-cell description ">
                                <div
                                >
                                    <div className="selected-option noprint-border">
                                        Chọn mô tả
                                    </div>
                                    <div className="dropdown-arrow toggle-icon">
                                        Lên | Xuống
                                    </div>
                                    <div className="options">
                                            <div

                                                className="option"
                                            >
                                                Option
                                            </div>
                                    </div>
                                </div>
                            </td>
                            <td className="table-cell size-item">
                                <input
                                    type="number"
                                    value=""
                                    className='noprint-border'
                                />
                            </td>
                            {/* <td className="table-cell size-item">
                                <input
                                    type="number"
                                    value=""
                                    className='noprint-border'
                                />
                            </td>
                            <td className="table-cell size-item">
                                <input
                                    type="number"
                                    value=""
                                    className='noprint-border'
                                />
                            </td> */}
                            <td className="table-cell unit">Cột unit</td>
                            <td className="table-cell size-item weight"><input
                                type="number"
                                value=""
                                style={{ border: '1px solid #C0C0C0' }}
                                className='noprint-border'
                            /></td>
                            <td className="table-cell price">1000.000</td>
                            <td className="table-cell total">
                                1.000.000
                            </td>
                            <td className="table-cell note">Note</td>
                            <td className="table-cell reference-image">
                                <div className="image-container">
                                    <div className="reference-image-tooltip">
                                            <img
                                                className="reference-image-item"
                                                style={{ width: "50%" }}
                                                src="Ảnh nè"
                                                alt=""
                                            />
                                        <span className="tooltip-text">Nhấn để xem thêm hình ảnh khác</span>
                                        <div className='multy-picture toggle-icon'>. . .</div>
                                    </div>
                                </div>
                            </td>
                            <td className="table-cell delete-button">
                                <button className="delete-buttonn">
                                    <i className="fas fa-times"></i> {/* Sử dụng biểu tượng "X" từ Font Awesome */}
                                </button>
                            </td>
                        </tr>
                </tbody>
            </table>
            <button className="add-row-button toggle-icon">
                <i className="fas fa-plus "></i>
            </button>
            {/* <div className="context-menu">
                <div>Xóa hàng này</div>
            </div> */}
            <table className="table-footer">
                <tbody>
                    <tr >
                        <td className="footer-title">Title</td>
                        <td className="footer-total">1.000.000</td>
                        <td className="footer-note"></td>
                        <td className="footer-totdescriptional"></td>
                    </tr>
                </tbody>
            </table>
            {/* <div className="slideshow-overlay">
                <Slideshow imageUrls={slideshowImageUrls} onClose={closeSlideshow} />
            </div> */}
        </div>
    );
}

export default TableBody