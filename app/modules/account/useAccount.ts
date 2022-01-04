import { RootState, useAppDispatch } from "app/store";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { loginAction, LoginForm, signUpAction, SignUpForm } from './accountSlice'

const useAccount =  () => {
    const {  } = useSelector((state: RootState) => state.account);
    const dispatch = useAppDispatch();


    const requestLogin = useCallback((obj: LoginForm) => dispatch(loginAction(obj)), [dispatch])
    
    const requestSignUp = useCallback((obj: SignUpForm) => dispatch(signUpAction(obj)), [dispatch])
    
    return {
        requestLogin,
        requestSignUp,
    }
}

export default useAccount