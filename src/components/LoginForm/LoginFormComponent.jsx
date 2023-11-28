import { login } from "../../services/users";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const [form, onChange, clear] = useForm({email: "", password: ""});
    const navigate = useNavigate();
    
    const onSubmitLogin = (event) => {
        event.preventDefault();
        login(form, navigate)
    }


    return (
        <>
        </>
    )
}