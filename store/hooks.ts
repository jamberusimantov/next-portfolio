import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, AppState } from './index'


const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const getAppStateHtml = ()=> useAppSelector((state:AppState)=>state.html)
export const useAppDispatch = () => useDispatch<AppDispatch>();