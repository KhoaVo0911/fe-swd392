import "../../styles/components/quotationForm.scss"
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
const QuotationForm = () => {
    return (
        <div className="quotation-form" id='dangpro'>
            <div className="logo">
            </div>
            <div className="text-container">
                <div className="left-text">
                    <div>
                        <strong>Email:</strong>
                        <span>daihocfpt@fpt.edu.vn</span>
                    </div>
                    <div>
                        <strong>Số điện thoại:</strong>
                        <span>039 999 7857</span>
                    </div>
                    <div>
                        <strong>Showroom:</strong>
                        <span>Lô E2a-7, Đường D1 Khu Công nghệ cao, P. Long Thạnh Mỹ, TP. Thủ Đức, TP. Hồ Chí Minh</span>
                    </div>
                    <div>
                        <strong>Xưởng sản xuất:</strong>
                        <span>Lô E2a-7, Đường D1 Khu Công nghệ cao, P. Long Thạnh Mỹ, TP. Thủ Đức, TP. Hồ Chí Minh</span>
                    </div>
                </div>
                <div className="right-text">
                    <div>
                        <strong>Khách hàng:</strong>
                        <input
                            type="text"
                            placeholder="Nhập họ và tên"
                        />
                    </div>
                    <div>
                        <strong>Số điện thoại:</strong>
                        <input
                            type="text"
                            placeholder="Nhập số điện thoại"
                        />
                    </div>
                    <div>
                        <strong>Địa chỉ công trình:</strong>
                        <input
                            type="text"
                            placeholder="Nhập địa chỉ"
                        />
                    </div>
                    <div>
                        <strong>Ngày soạn báo giá:</strong>
                        <input
                            type="text"
                        />
                    </div>
                </div>
            </div>
            <TableHeader />
            <TableBody/>
            <div className="note-2">
                <p className="note-text">
                    Báo giá trên chỉ mang tính chất tham khảo do chưa có số liệu công trình thực tế. Vui lòng liên hệ sale:
                </p>
            </div>
            {/* <Joyride
            steps={steps}
            run={isTourOpen}
            continuous={true}
            showProgress={true}
            showSkipButton={true}
            disableOverlay={false}
            callback={({ index, status }) => {
              if (status === 'finished') {
                // Hướng dẫn đã hoàn thành
                setIsTourOpen(false);
              }
            }}
            styles={{
              options: {
                arrowColor: "#3498db",
                backgroundColor: "#3498db",
                overlayColor: "rgba(52, 152, 219, .3)",
                primaryColor: "#3498db",
                textColor: "#fff",
              },
              spotlight: {
                backgroundColor: "transparent",
              },
            }}
          /> */}
        </div>

    );
}

export default QuotationForm