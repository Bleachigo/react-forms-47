import * as yup from 'yup';

export const userSchema = yup.object({
  nickname: yup
    .string()
    .min(3, 'Min 3 characters')
    .required('This field is required'),
  email: yup
    .string()
    .email('Invalid email')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Invalid email')
    .required('This field is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 simbols')
    .required('This field is required'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match')
    .required('This field is required'),
});

export type FormValues = yup.InferType<typeof userSchema>;
