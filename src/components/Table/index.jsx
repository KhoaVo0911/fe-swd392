import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from 'antd';

function TableComponent({ props }) {

  console.log("PROPS: ", props);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);

  // Xử lý two-way binding
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...data];
    list[index][name] = value;
    setData(list);
  };

  useEffect(() => {
    initData(props);
  }, []);

  const initData = (data) => {
    setData(data);
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const showModal = (items) => {
    setItems(items);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <Fragment>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Sản phẩm
              </th>
              <th scope="col" class="px-6 py-3">
                Mô tả
              </th>
              <th scope="col" class="px-6 py-3">
                Kích thước
              </th>
              <th scope="col" class="px-6 py-3">
                Đơn vị
              </th>
              <th scope="col" class="px-6 py-3">
                Đơn giá
              </th>
              <th scope="col" class="px-6 py-3">
                Hình ảnh tham khảo
              </th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {data[0].packageList.map((item, index) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.packageName}
                </th>
                <td class="px-6 py-4">{item.description}</td>
                <td class="px-6 py-4">{item.packageArea}</td>
                <td class="px-6 py-4">m2</td>
                <td class="px-6 py-4">{item.packagePrice}</td>
                <td class="px-6 py-4">
                  <img
                    class="h-auto rounded-lg"
                    style={{ maxWidth: "10rem" }}
                    src={item.image}
                    alt={item.description}
                  />
                </td>
                <td class="px-6 py-4">
                  {/* Modal toggle */}
                  <Button onClick={() => showModal(item.itemList)} type="default">
                    Xem chi tiết
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal
        width="80%"
        open={isModalOpen}
        title="DANH SÁCH VẬT LIỆU"
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
            <>
                <CancelBtn />
                <Button onClick={handleOk} type="default">
                    Chỉnh sửa
                </Button>
            </>
        )}
      >
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Tên
              </th>
              <th scope="col" class="px-6 py-3">
                Diện tích
              </th>
              <th scope="col" class="px-6 py-3">
                Đơn vị
              </th>
              <th scope="col" class="px-6 py-3">
                Đơn giá
              </th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.itemName}
                </th>
                <td class="px-6 py-4">{item.itemArea}</td>
                <td class="px-6 py-4">m2</td>
                <td class="px-6 py-4">{item.itemPrice}</td>
                <td class="px-6 py-4">
                  <Button type="default">
                    Chỉnh sửa vật liệu
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>

    </Fragment>
  );
}

export default TableComponent;