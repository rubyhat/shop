import { Navigate } from "react-router-dom";

interface Props {
  isAuth: boolean;
  children: JSX.Element;
}

const ProtectedRoute = ({ isAuth, children }: Props) => {
  if (!isAuth) {
    return <Navigate to="/no-auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
