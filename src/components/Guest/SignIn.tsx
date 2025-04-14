import {useState} from "react";
import {createToken} from "../../utils/constants.ts";
import {fetchUser} from "../../features/api/accountApi.ts";
import {useAppDispatch} from "../../app/hooks.tsx";

const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleClickSignIn = () => {
        dispatch(fetchUser(createToken(login, password)));
    }

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
    }

    return (
        <>
            <label> Login:
                <input
                    type={'text'}
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
            </label>
            <label>Password:
                <input
                    type={'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </label>
            <button onClick={handleClickSignIn}>Sign in</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default SignIn;