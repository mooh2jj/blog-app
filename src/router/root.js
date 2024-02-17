import { Suspense, lazy } from "react";
import productsRouter from "./productsRouter";
import MainPage from "../pages/MainPage";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>; // 코드 스플릿, Loading 컴포넌트를 만들어서 사용

const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
// const ProductsIndex = lazy(() => import("../pages/products/IndexPage"));

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
    // path: "products",
    // element: (
    //   <Suspense fallback={Loading}>
    //     {/* <ProductsIndex /> */}
    //   </Suspense>
    // ),
    // children: productsRouter(),
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
]);

export default root;
