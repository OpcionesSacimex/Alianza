import { useUserContext } from '../providers/UserProvider';

export const userInfo = () => {
    const {user,setUser} = useContext(useUserContext);
    return {user,setUser};
}