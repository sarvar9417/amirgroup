import React, { Suspense } from "react";
import Loader from "./Components/Loader/Loader";

const Login = React.lazy(() => import("./Pages/Login/Login"));
const PageRoutes = React.lazy(() => import("./Pages/PageRoutes"));

function App() {
  const logged = true;
  return (
    <div className='app'>
      <Suspense fallback={<Loader />}>
        {logged ? <PageRoutes /> : <Login />}
      </Suspense>
    </div>
  );
}

export default App;
