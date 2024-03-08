import React from 'react'
import {useFormik} from 'formik'
import formSchema from './formValidation.js'

function App(){
    
    const formik = useFormik({
        initialValues:{
            username: "",
            email: "",
            password: ""
        },
        onSubmit: function()
        {
            console.log("data is submitted")
        },
        validationSchema: formSchema,
        validate: function(data)
        {
            let errors = {}
 
            if(!data.username)
            {
                errors.username = "username is required"
            }
            if(!data.email)
            {
                errors.email = "email is required"
            }
            if(!data.password)
            {
                errors.password = "password is required"
            }
            return errors
        }
    })

    return(
        <div>
            <center>
                <h2>Contact Form</h2>
                <form method="POST" onSubmit={formik.handleSubmit}>

                    <label>Username:</label>
                    <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange}/><br/><br/>
                    {formik.errors.username ? <h3>{formik.errors.username}</h3> : null}

                    <label>Email:</label>
                    <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange}/><br/><br/>
                    {formik.errors.email ? <h3>{formik.errors.email}</h3> : null}

                    <label>Password:</label>
                    <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange}/><br/><br/>
                    {formik.errors.password ? <h3>{formik.errors.password}</h3> : null}

                </form>
            </center>
        </div>
    )
}
export default App;