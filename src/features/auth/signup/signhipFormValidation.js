import * as yup from "yup";

export const signupValidationSchema = yup.object ({
    firstName: yup.string().required()
    .min(3, "First name must include at least 3 characters")
    .max(50, "Last name must include at most 50 characters"),
    lastName: yup
    .string () 
    .required()
    .min(3, "Last name should be at least 3 characters")
    .max(50, "Last name should be at most 50 characters"),
    email: yup.string().email ("Invalid email format"), 
    password: yup
    .string()
    .required ()
    .min(7, "Password must be at least 7 characters")
    .max(50, "Password should be at most 50 characters"),
});