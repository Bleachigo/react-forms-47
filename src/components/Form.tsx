import { useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { Input } from './Input';
import { userSchema, type FormValues } from '../validation/formValidation';

type User = Omit<FormValues, 'confirm'>;

export const Form = () => {
  const [users, setUsers] = useState<User[]>([]);
  const formik = useFormik<FormValues>({
    initialValues: {
      nickname: '',
      email: '',
      password: '',
      confirm: '',
    },

    validationSchema: userSchema,

    onSubmit: ({ confirm, ...user }, { resetForm }) => {
      setUsers((prev) => [...prev, user]);
      resetForm();
    },
  });

  return (
    <>
      <FormikProvider value={formik}>
        <form className="form" onSubmit={formik.handleSubmit}>
          <Input
            name="nickname"
            label="Nickname"
            className="form-input"
            autoComplete="on"
          />
          <Input
            name="email"
            label="Email"
            type="email"
            className="form-input"
            autoComplete="email"
          />
          <Input
            name="password"
            label="Password"
            type="password"
            className="form-input"
            autoComplete="new-password"
          />
          <Input
            name="confirm"
            label="Confirm password"
            type="password"
            className="form-input"
            autoComplete="new-password"
          />
          <button type="submit" className="btn" disabled={formik.isSubmitting}>
            Send
          </button>
        </form>
      </FormikProvider>

      <ol className="users-list">
        {users.map((user) => (
          <li key={user.email}>
            {user.nickname} ({user.email})
          </li>
        ))}
      </ol>
    </>
  );
};
