import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Button, Flex } from "antd";

export const PROJECT_COLUMNS = () => [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
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
    title: "Style",
    dataIndex: "style",
    key: "style",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  
  {
    title: "Start date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
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

export const PROJECT_DATA_SOURCE = () => [
  {
    title: "Project 1",
    style: "New style",
    description: "This is a new description",
    image:
      "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706592703/pngtree-home-interior-living-area-with-minimalist-3d-render-image_3770536_pa6hjr.jpg",
    startDate: "05/02/2024",
    endDate: "15/02/2024",
  },

  {
    title: "Project 1",
    style: "New style",
    description: "This is a new description",
    image:
      "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/ghe-don-sofa-vai-cao-cap-furnist-bora-do_svg23w.jpg",
    startDate: "05/02/2024",
    endDate: "15/02/2024",
  },

  {
    title: "Project 1",
    style: "New style",
    description: "This is a new description",
    image:
      "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/cac-dong-san-pham-cua-noi-that-the-one-5_smjptc.jpg",
    startDate: "05/02/2024",
    endDate: "15/02/2024",
  },
];
