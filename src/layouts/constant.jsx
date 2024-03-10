import { Link } from "react-router-dom";

export const avatarItems = [
  {
    key: "1",
    label: (
      <Link to={"/login"} style={{ textDecoration: "none" }}>
        Logout account
      </Link>
    ),
  },
];
