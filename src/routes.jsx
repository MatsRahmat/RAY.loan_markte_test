import Dashboard from "./pages/dahsboard/dashboard";
import DefaultPage from "./pages/default";

const router = [
  {
    path: "/dashboard",
    name: "Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/contact",
    name: "Contact",
    element: <DefaultPage />,
  },
  {
    path: "/loan",
    name: "Loan",
    element: <DefaultPage />,
  },
  {
    path: "/product",
    name: "Product",
    element: <DefaultPage />,
    children: [
      {
        path: "/product/bank-product",
        name: "Bank Product",
        element: <DefaultPage />,
      },
      {
        path: "/product/product/",
        name: "Product",
        element: <DefaultPage />,
      },
      {
        path: "/product/category-product",
        name: "Category Product",
        element: <DefaultPage />,
      },
    ],
  },
  {
    path: "/bank",
    name: "Bank",
    element: <DefaultPage />,
  },
  {
    path: "/credit-scoring",
    name: "Credit Scoring",
    element: <DefaultPage />,
  },
  {
    path: "/faq",
    name: "FAQ's",
    element: <DefaultPage />,
  },
  {
    path: "/pipline",
    name: "pipline",
    element: <DefaultPage />,
  },
  {
    path: "/pipline-developer",
    name: "Pipeline Developer",
    element: <DefaultPage />,
  },
  {
    path: "/markting-tools",
    name: "Marketing Tools",
    element: <DefaultPage />,
  },
  {
    path: "/whatsapp",
    name: "Whatsapp",
    element: <DefaultPage />,
  },
];

export default router;
