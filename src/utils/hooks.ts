import { RootState } from "@/types/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export function useInitState<T extends keyof RootState>(action: () => void, stateName: T) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(action())
  }, [dispatch, action])
  const state = useSelector((state: RootState) => state[stateName])
  return state
}