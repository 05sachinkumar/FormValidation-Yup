const yup = require("yup")

export const formSchema = yup.object().shape({
    username: yup.string().required("username required"),
    email: yup.string().required("email required"),
    password: yup.string().min(5).max(20).required("password should minimum 5 and maximum 20")
})    
export default formSchema;