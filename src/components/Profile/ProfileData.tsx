import {useAppSelector} from "../../app/hooks.tsx";

const ProfileData = () => {
    const {firstName, lastName, login, roles} = useAppSelector(state => state.user);
    return (
        <>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Login: {login}</p>
            <ul>
                {roles.map((role) => <li key={role}>{role}</li>)}
            </ul>
        </>
    );
};

export default ProfileData;