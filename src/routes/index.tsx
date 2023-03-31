import { useContext } from "react";
import { Loading } from "../components/loading";
import { AuthContext } from "../contexts/authContext";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const {isAuthenticated, loading} = useContext(AuthContext)

  if(loading) {
    return (
      <Loading/>
    )
  }

  return (
    isAuthenticated ? <AppRoutes /> : <AuthRoutes />
  )
}