import { useSelector } from "react-redux";

export function useStatus() {
  const { status } = useSelector((state) => state.auth);
  return {
    status,
  };
}
