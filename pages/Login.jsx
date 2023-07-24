
import { Form,  useActionData, useLoaderData,  useNavigation } from "react-router-dom";
import { loginUser } from "../api";

export function loginLoader({ request }) {
    return new URL(request.url).searchParams.get('message')
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get('email')
    const password = formData.get("password")
    try{
        const data = await loginUser({ email, password })
        localStorage.setItem('loggedin', true);
        console.log(localStorage.getItem('loggedin'))
        return null
    }catch(e){
        return e.message
    }
    
    
}
export default function Login() {

    const error = useActionData()
    const navigation = useNavigation()
    console.log(error)
    const messageLoader = useLoaderData()


    return (
        <div className="login-container">
            <h1>Sing in to your account</h1>
            {localStorage.getItem("loggedin") ? 
                <h3 style={{ color: '#009900', textAlign: 'center' }}>successfully authorized </h3>
                //<br/> <Link to= '/host' style={{textDecoration: 'underline', fontSize:'20'}}>to go to the page host</Link>
                : 
                <h3 style={{ color: '#cc0000', textAlign: 'center' }}>{messageLoader}</h3>
            }
            {error && <h3 style={{ color: '#cc0000', textAlign: 'center' }}>{error}</h3>}
            <Form method="post" className="login-form">
                <input
                    name='email'
                    type="email"
                    placeholder='Email address'
                >
                </input>
                <input
                    name="password"
                    type='password'
                    placeholder="Password">
                </input>
                <button disabled={navigation.state === 'submitting'} >{
                    navigation.state === 'submitting' ? 'Logging in...' : 'Log in'
                }</button>

            </Form>
        </div>
    )
}