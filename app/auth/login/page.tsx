import { LoginForm } from "@/components/Auth/LoginForm"
import Navbar from "@/components/Navbar"

const LoginPage = () => {
    return (
        <>
            <Navbar isLogin />
            <div className="items-center  justify-center bg-muted flex">
                <LoginForm />
            </div>
        </>
    )
}

export default LoginPage
