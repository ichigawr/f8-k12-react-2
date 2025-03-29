import config from "@/config";

import NoHeaderLayout from "@/layouts/NoHeaderLayout";
import NoFooterLayout from "@/layouts/NoFooterLayout";

import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import Products from "@/pages/Products";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Users from "@/pages/Users";
import NotFound from "@/pages/NotFound";

const routes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.products,
    component: Products,
    layout: NoFooterLayout,
  },
  {
    path: config.routes.productDetail,
    component: ProductDetail,
    layout: null,
  },
  {
    path: config.routes.login,
    component: Login,
  },
  {
    path: config.routes.register,
    component: Register,
  },
  {
    path: config.routes.users,
    component: Users,
    protected: true,
  },
  {
    path: config.routes.notFound,
    component: NotFound,
    layout: NoHeaderLayout,
  },
];

export default routes;
