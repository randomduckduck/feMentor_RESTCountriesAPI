// const { BrowserRouter } = require("./react-router-dom.development");
import * as React from "https://esm.sh/react";
import * as ReactDOM from "https://esm.sh/react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
  Link,
  Route,
} from "https://esm.sh/react-router-dom";
let mm = createBrowserRouter([
  {
    path: "/index.html",
    element: <RenderMain></RenderMain>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/index.html/myf",
    element: <Myf></Myf>,
  },
]);
// let { Route, Switch, Link } = ReactRouterDOM;

// asdome
function Main() {
  return <div>Main 1 div</div>;
}
// const Link = ReactRouterDOM.Link;
// const Route = ReactRouterDOM.Route;
function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1> mystyleasda
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
function Myf() {
  return <div>Myfffasdasdad</div>;
}
function Main2() {
  return (
    <>
      <RouterProvider router={mm} fallbackElement={<Main />}>
        <div>Main 2 div</div>
      </RouterProvider>
    </>
  );
}
// // <BrowserRouter>
// {
//   /* <ReactRouterDOM.HashRouter> */
// }
// {
//   /* <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/register">Register</Link>
//         </li>
//       </ul>

//       <Route path="/" exact component={Home} />
//       <Route path="/login" component={Login} />
//       <Route path="/register" component={Register} /> */
// }
// {
//   /* </ReactRouterDOM.HashRouter> */
// }
// </BrowserRouter>
const Home = () => <h1>Home</h1>;
const Login = () => <h1>Login</h1>;
const Register = () => <h1>Register</h1>;

function Main3() {
  return (
    <>
      <Main2></Main2>
      <div>Main 3 div</div>;
    </>
  );
}
function RenderMain() {
  return (
    <RouterProvider router={mm} fallbackElement={<Main />}>
      <div>Main 2 div</div>
      <ul>
        //{" "}
        <li>
          // <Link to="/">Home</Link>
          //{" "}
        </li>
        //{" "}
        <li>
          // <Link to="/login">Login</Link>
          //{" "}
        </li>
        //{" "}
        <li>
          // <Link to="/register">Register</Link>
          //{" "}
        </li>
        //{" "}
      </ul>
      // <Route path="/" exact component={Home} />
      // <Route path="/login" component={Login} />
      // <Route path="/register" component={Register} />
    </RouterProvider>
  );
}
var kk = ReactDOM.createRoot(document.querySelector("#root"));
kk.render(<RenderMain></RenderMain>);
