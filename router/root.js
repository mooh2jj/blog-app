import { Suspense, lazy } from "react";
import productsRouter from "./productsRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>;

const ProductsIndex = lazy(() => import("../pages/products/IndexPage"));

const root = createBrowserRouter([
  {
    // path: "",
    // element: <Suspense fallback={Loading}><Main/></Suspense>
    // },{
    // path: "about",
    // element: <Suspense fallback={Loading}><About/></Suspense>
    // }, {
    // path: "todo",
    // element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
    // children: todoRouter()
    // }, {
    path: "products",
    element: (
      <Suspense fallback={Loading}>
        <ProductsIndex />
      </Suspense>
    ),
    children: productsRouter(),
  },
]);
export default root;
