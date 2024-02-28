import styles from "./style";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

const Layout = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Outlet />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/portfolio",
        element: <Portfolio/>
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
