import { useUserContext } from '../providers/UserProvider';

const userInfo = () => {
    const {user,setUser} = useContext(useUserContext);
    return {user,setUser};
}

export default userInfo;