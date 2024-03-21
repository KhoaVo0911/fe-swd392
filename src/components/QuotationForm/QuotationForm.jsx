import { useState, useEffect } from "react";
import "../../styles/components/quotationForm.scss"
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
import TableComponent from "../Table/index";
import { Customer } from "../../api/database";

const QuotationForm = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initData(Customer);
    }, []);

    // Xử lý lấy user by token từ localStorage
    const initData = async (data) => {
        setUser(data[0]);
        setLoading(false);
    }

    if (loading) { return <div>Loading...</div> }

    return (
      <div className="quotation-form" id="dangpro">
        <form class="max-w-full mx-auto">
          <div className="grid grid-cols-2 grid-flow-row gap-4">
            
            {/* Địa chỉ công trình */}
            <div className="col-start">
              <div class="mb-3">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold"
                >
                  Email nhà thầu
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  value='tokyo@gmail.com'
                  required
                />
              </div>
              <div class="mb-3">
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold"
                >
                  Số điện thoại nhà thầu
                </label>
                <input
                  type="phone"
                  id="phone"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  value='0903 802 222'
                  required
                />
              </div>
              <div class="mb-3">
                <label
                  for="address"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold"
                >
                  Địa chỉ công trình
                </label>
                <input
                  type="text"
                  id="address"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  value='123 Main St, Anytown, AT 12345'
                  required
                />
              </div>
            </div>

            {/* Thông tin khách hàng */}
            <div className="col-end text-start">
                <div class="mb-3">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold">Nhập email của bạn</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" defaultValue= {user.customerName} required />
                </div>
                <div class="mb-3">
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold">Nhập số điện thoại của bạn</label>
                    <input type="phone" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="0903 802 222" defaultValue= {user.phone} required />
                </div>
                <div class="mb-3">
                    <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold">Nhập địa chỉ của bạn</label>
                    <input type="text" id="address" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="123 Main St, Anytown, AT 12345" defaultValue= {user.address} required />
                </div>
            </div>

          </div>
        </form>

        {/* Hiển thị dữ liệu Quotation của customer */}
        <TableComponent props={user.quotationRequest}/>

        {/* <TableHeader />
        <TableBody /> */}
        <div className="note-2">
          <p className="note-text">
            Báo giá trên chỉ mang tính chất tham khảo do chưa có số
            liệu công trình thực tế. Vui lòng liên hệ sale:
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