import {useState} from "react";
import {UpdateMode} from "../../utils/types.d.tsx";
import ChangePassword from "./ChangePassword.tsx";
import EditProfile from "./EditProfile.tsx";

const UpdateUser = () => {
    const [updateMode, setUpdateMode] = useState<UpdateMode>(UpdateMode.DEFAULT);

    switch (updateMode) {
        case UpdateMode.CHANGE_PASSWORD:
            return <ChangePassword close={() => setUpdateMode(UpdateMode.DEFAULT)}/>
        case UpdateMode.EDIT_PROFILE:
            return <EditProfile close={() => setUpdateMode(UpdateMode.DEFAULT)}/>
        default:
            return (
                <div>
                    <button onClick={() => setUpdateMode(UpdateMode.CHANGE_PASSWORD)}>Change password</button>
                    <button onClick={() => setUpdateMode(UpdateMode.EDIT_PROFILE)}>Edit profile</button>
                </div>
            )
    }
};

export default UpdateUser;