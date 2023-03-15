import * as yup from 'yup'
import { Errors } from '../errors'

export const RegisterSchema = yup.object().shape({
  email: 
  yup.string()
  .email(Errors.invalidEmail)
  .required(Errors.requiredField),
  
  password: 
  yup.string()
  .required(Errors.requiredField)
  .min(4,Errors.minLength)
  .max(10, Errors.maxLength)
  .matches(RegExp("(.*[A-Z].*)"), Errors.upperCase),
  
  repeatPassword:
  yup.string()
  .oneOf([yup.ref('password')], Errors.passNotMatch),
})

export const LoginSchema = yup.object().shape({
  email: 
  yup.string()
  .email(Errors.invalidEmail)
  .required(Errors.requiredField),
  
  password: 
  yup.string()
  .required(Errors.requiredField)
  .min(4,Errors.minLength)
  .max(10, Errors.maxLength)
  .matches(RegExp("(.*[A-Z].*)"), Errors.upperCase),

  oldPass: 
  yup.string()
  .oneOf([yup.ref('password')], Errors.inCorrectPass),
})

export const ChangePasswordSchema = yup.object().shape({
  oldPassword: 
  yup.string()
  .required(Errors.requiredField)
  .min(4,Errors.minLength)
  .max(10, Errors.maxLength)
  .matches(RegExp("(.*[A-Z].*)"), Errors.upperCase),
  
  newPassword: 
  yup.string()
  .required(Errors.requiredField)
  .min(4,Errors.minLength)
  .max(10, Errors.maxLength)
  .matches(RegExp("(.*[A-Z].*)"), Errors.upperCase),

  repeatNewPassword: 
  yup.string()
  .oneOf([yup.ref('newPassword')], Errors.passNotMatch),
})