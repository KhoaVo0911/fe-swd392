import React, { useEffect } from "react";
import { useState } from "react";
import { Collapse } from 'antd';

const PackageList = ({props}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // Xử lý map dữ liệu vào Collapse Antd
  useEffect(() => {
    initData(props);
  }, []);
  
  const initData = (data) => {
    const items = data.packageList.map((item, index) => {
      return {
        key: index + 1,
        label: item.packageName,
        children: <ListItem data={item}/>
      };
    });
    setItems(items);
    setLoading(false);
  }

  if (loading) return <div>Loading...</div>;

  return (
    <Collapse items={items} defaultActiveKey={['1']} />
  );
};

export default PackageList;

const ListItem = ({data}) => {

  if (!data?.itemList) return <div>Loading...</div>;

  return (
    <div class="relative w-full overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Item Name
            </th>
            <th scope="col" class="px-6 py-3">
              Item Area
            </th>
            <th scope="col" class="px-6 py-3">
              Item Price
            </th>
          </tr>
        </thead>
        <tbody>
          {data.itemList.map((item) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.itemName}
              </th>
              <td class="px-6 py-4">{item.itemArea} m2</td>
              <td class="px-6 py-4">{item.itemPrice} USD </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};