import { useSelector } from "react-redux";

export function useUser() {
  const { user } = useSelector((state) => state.auth);
  return {
    user,
  };
}
