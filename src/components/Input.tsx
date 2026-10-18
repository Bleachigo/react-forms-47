import { useField } from 'formik';

interface InputProps {
  name: string;
  label: string;
  type?: string;
  className?: string;
  autoComplete?: string;
}

export const Input = ({ label, className, ...props }: InputProps) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <div className="wrapper">
      <label className="form-label" htmlFor={props.name}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`${className ?? ''} ${hasError ? 'input-error' : ''}`}
        id={props.name}
      />
      {meta.touched && meta.error && (
        <p className="error-message">{meta.error}</p>
      )}
    </div>
  );
};
