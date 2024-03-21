export const PAGE_ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",

  STAFF: {
    MAIN: "/staff",
    PROJECTS: "/staff/projects",
    QUOTATIONS: "/staff/quotation",
    PRODUCTS: "/staff/products",
  },

  BLOG: {
    MAIN: "/blog",
    DETAIL: "/blog/:slug",
  },
};

export const FORM_RULES = {
  required: {
    required: true,
    message: "This field is required",
  },
  email: {
    type: "email",
    message: "The value is invalid email",
  },
};
