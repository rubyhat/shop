import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import Registration from "../components/Registration";
import Page404 from "../pages/page404";
import ProtectedRoute from "./ProtectedRoute";

const RouterList: FC = () => {
  const isAuth = true;

  const Testt = () => {
    return <div>testing</div>;
  };
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      {/* <Route exact path="/no-auth" element={<NoAuth />} /> */}
      <Route path="/" element={<Hero />} />
      <Route path="/registration" element={<Registration />} />
      <Route
        path="/test"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Testt />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RouterList;
