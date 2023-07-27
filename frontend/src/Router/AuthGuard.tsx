import { Navigate, Outlet } from "react-router-dom";

export interface AuthGuardProps {
  isPrivate: boolean
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const signedIn = false;

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
