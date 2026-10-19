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
  const errId = `${props.name}-error`;

  return (
    <div className="wrapper">
      <label className="form-label" htmlFor={props.name}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        id={props.name}
        aria-invalid={hasError ? true : undefined}
        aria-describedby={hasError ? errId : undefined}
        className={`${className ?? ''} ${hasError ? 'input-error' : ''}`}
      />
      {meta.touched && meta.error && (
        <p className="error-text" role="alert">
          {meta.error}
        </p>
      )}
    </div>
  );
};
