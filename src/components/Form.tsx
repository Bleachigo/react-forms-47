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
          <Input name="nickname" label="Nickname" className="form-input" />
          <Input
            name="email"
            label="Email"
            type="email"
            className="form-input"
            autoComplete="off"
          />
          <Input
            name="password"
            label="Password"
            type="password"
            className="form-input"
          />
          <Input
            name="confirm"
            label="Confirm password"
            type="password"
            className="form-input"
          />
          <button type="submit" className="btn">
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
