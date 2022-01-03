import { RootState, useAppDispatch } from "app/store";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { login, LoginForm } from './accountSlice'

export default () => {
    const {  } = useSelector((state: RootState) => state.account);
    const dispatch = useAppDispatch();


    const requestLogin = useCallback((obj: LoginForm) => dispatch(login(obj)), [dispatch])
    
    return {
        requestLogin,
    };
}