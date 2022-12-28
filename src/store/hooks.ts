import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, StoreDispatch } from "./index";

export const useStoreDispatch: () => StoreDispatch = useDispatch;
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useMountData = (data: any, error: any, setter: any) => {};
