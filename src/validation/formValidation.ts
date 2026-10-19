import * as yup from 'yup';

export const userSchema = yup.object({
  nickname: yup
    .string()
    .trim()
    .required('Enter a nickname')
    .min(3, 'Use at least 3 characters'),

  email: yup
    .string()
    .trim()
    .required('Enter your email')
    .email('Enter valid email, e.g. name@mail.com')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, {
      message: 'Add a domain name, e.g. ".com"',
      excludeEmptyString: true,
    }),

  password: yup
    .string()
    .required('Enter a password')
    .min(8, 'Use at least 8 characters'),

  confirm: yup
    .string()
    .required('Repeat your password')
    .oneOf([yup.ref('password')], 'Password do not match'),
});

export type FormValues = yup.InferType<typeof userSchema>;
