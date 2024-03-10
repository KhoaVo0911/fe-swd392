import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Button, Flex, Tag } from "antd";
import { LuEye } from "react-icons/lu";

export const QUOTATION_COLUMNS = ({ viewProductDetail }) => [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
    ),
  },
  {
    title: "Created at",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Details",
    dataIndex: "details",
    key: "details",
    render: () => (
      <Button background="clear" icon={<LuEye />} onClick={viewProductDetail}>
        View detail
      </Button>
    ),
  },
  {
    title: "Actions",
    dataIndex: "createdAt",
    key: "createdAt",
    render: () => (
      <Flex gap="middle">
        <Button icon={<EditOutlined />} type="primary" />
        <Button icon={<DeleteOutline />} danger />
      </Flex>
    ),
  },
];

export const QUOTATION_DATA_SOURCE = () => [
  {
    id: "1",
    status: "Active",
    createdAt: "02/05/2024",
    details: "Detail",
  },
  {
    id: "2",
    status: "Inactive",
    createdAt: "02/05/2024",
    details: "Detail",
  },
];
