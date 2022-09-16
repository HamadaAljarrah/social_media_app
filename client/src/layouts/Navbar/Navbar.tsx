import { useAuth } from "../../context/auth.context";
import { AuthNavbar } from "./AuthNavbar";
import { DefaultNavbar } from "./DefaultNavbar";




export const Navbar = () => {
    const { currentUser } = useAuth();
    return currentUser ? <AuthNavbar /> : <DefaultNavbar />
}