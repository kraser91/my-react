import React from 'react';
import { Form, Field } from 'react-final-form'
const onSubmit = (event) => {
    console.log(event)
}

const LoginForm = () => {
    return (
        <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="login"
                        component="input"
                        type="text"

                        palaceholder="login"/>
                </div>
                <div>
                    <Field
                        name="password"
                        component="input"
                        type="password"
                        palaceholder="password"/>
                </div>
                <div>
                    <Field
                        name="rememberMe"
                        value="remember Me"
                        component="input"
                        type="checkbox"/>
                </div>
                <div>
                    <button
                        type="submit"
                        >Submit</button>
                </div>
            </form>
        )}
        ></Form>
    )
}

 const Login = () => {
    return (
        <div>
            <div>login</div>
            <LoginForm/>
        </div>

    )
}
export default Login