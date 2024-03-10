import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Button, Flex } from "antd";

export const PRODUCT_COLUMNS = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => (
      <img
        alt="image-alt"
        src={image}
        style={{
          height: "100px",
          objectFit: "cover",
          borderRadius: "8px",
          width: "150%",
        }}
      />
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Actions",
    dataIndex: "action",
    key: "action",
    render: () => (
      <Flex gap="middle">
        <Button icon={<EditOutlined />} type="primary" />
        <Button icon={<DeleteOutline />} danger />
      </Flex>
    ),
  },
];

export const PRODUCT_DATA_SOURCE = [
  {
    name: "Project 1",
    price: "120$",
    description: "This is a new description",
    quantity: "99",
    image:
      "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/n%E1%BB%99i-th%E1%BA%A5t-in-3d-15_zqm0wq.jpg",
  },

  
];
